// app/api/products/route.ts
import { NextRequest } from "next/server";
import { ProductSchema } from "@/lib/validators";
import {
  ok, created, unauthorized, validationError, serverError,
} from "@/lib/api-response";
import prisma from "@/lib/prisma";


export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
    return ok(products);
  } catch (e) {
    return serverError(e);
  }
}


export async function POST(req: NextRequest) {
  try {
    // const user = await requireAuth(req);
    // if (!user) return unauthorized();

    const body = await req.json();
    const parsed = ProductSchema.safeParse(body);
    if (!parsed.success) return validationError(parsed.error);

    const product = await prisma.product.create({ data: parsed.data });
    return created(product);
  } catch (e) {
    return serverError(e);
  }
}