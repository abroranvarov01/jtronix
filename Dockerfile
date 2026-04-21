# Dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Копируем package.json, чтобы работал npm run start
COPY package*.json ./

# Для обычного старта нужны все node_modules (включая сгенерированный Prisma Client)
COPY --from=builder /app/node_modules ./node_modules

# Копируем ВСЮ папку .next (а не только standalone)
COPY --from=builder /app/.next ./.next

# Копируем публичные файлы и схему БД
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

# Запускаем миграции и стандартный сервер Next.js
CMD npx prisma migrate deploy && npm run start