// lib/require-auth.ts
import { NextRequest } from "next/server";
import { verifyToken } from "./auth";

export async function requireAuth(req: NextRequest) {
  const token = req.cookies.get("jtronix_token")?.value;
  if (!token) return null;
  return verifyToken(token);
}