// app/api/products/[id]/route.ts
import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { ProductUpdateSchema } from "@/lib/validators";
import {
  ok, notFound, validationError, serverError,
} from "@/lib/api-response";

type Ctx = { params: Promise<{ id: string }> };  // ← Promise!

export async function GET(_req: NextRequest, { params }: Ctx) {
  try {
    const { id } = await params;  // ← await
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) return notFound("Mahsulot topilmadi");
    return ok(product);
  } catch (e) {
    return serverError(e);
  }
}

export async function PUT(req: NextRequest, { params }: Ctx) {
  try {
    const { id } = await params;  // ← await
    const body = await req.json();
    const parsed = ProductUpdateSchema.safeParse(body);
    if (!parsed.success) return validationError(parsed.error);
    const product = await prisma.product.update({ where: { id }, data: parsed.data });
    return ok(product);
  } catch (e) {
    return serverError(e);
  }
}

export async function DELETE(_req: NextRequest, { params }: Ctx) {
  try {
    const { id } = await params;  // ← await
    await prisma.product.delete({ where: { id } });
    return ok({ success: true });
  } catch (e) {
    return serverError(e);
  }
}