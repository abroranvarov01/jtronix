// lib/validators.ts
import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(1, "Nom majburiy").max(200),
  description: z.string().max(1000).optional().default(""),
  brand: z.enum(["kwangshin", "tianyi", "sichuan", "tianchen", "farnova"], {
    errorMap: () => ({ message: "Noto'g'ri brend" }),
  }),
  type: z.enum(
    ["compressor", "valve", "electro", "flow", "regulator", "piston", "seal", "hose"],
    { errorMap: () => ({ message: "Noto'g'ri tur" }) }
  ),
  image: z.string().max(500).optional().default(""),
});

export const ProductUpdateSchema = ProductSchema.partial();

export const LoginSchema = z.object({
  email: z.string().email("Email noto'g'ri"),
  password: z.string().min(1, "Parol majburiy"),
});

export type ProductInput = z.infer<typeof ProductSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;