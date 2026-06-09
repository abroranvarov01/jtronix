import { defineConfig } from '@prisma/config';

export default defineConfig({
  earlyAccess: true,
  schema: './prisma/schema.prisma',
  studio: {
    port: 5555
  }
});
