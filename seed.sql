-- Seed script: migrates old product data into new schema
-- Run AFTER prisma db push creates the new tables
-- Usage: docker exec -i petronix_db psql -U postgres -d petronix_db < seed.sql

-- Insert admin user (password: admin123 - bcrypt hash)
INSERT INTO "User" (id, email, password, name, role, "createdAt")
VALUES (
  'admin-seed-001',
  'admin@petronix.uz',
  '$2a$10$8KzaNdKIMyOkASRVhRLue.6Nh3gUTk0V0F5sG/LhRZaGDqVv0qW.',
  'Admin',
  'ADMIN',
  NOW()
) ON CONFLICT (email) DO NOTHING;

-- NOTE: Old products had single "name" field in Uzbek.
-- To re-import, add products via admin panel with multi-language support.
-- Or use this template to insert directly:
--
-- INSERT INTO "Product" (id, "nameUz", "nameRu", "nameEn", "descriptionUz", "descriptionRu", "descriptionEn", brand, type, image, "costPrice", "sellPrice", "wholesalePrice", "createdAt", "updatedAt")
-- VALUES ('...', 'Nom UZ', 'Название RU', 'Name EN', '', '', '', '{brand}', 'type_slug', '/img/...', 0, 0, 0, NOW(), NOW());
