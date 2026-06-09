// app/api/products/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { serverError } from "@/lib/api-response";

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
    const product = await res.json();
    return NextResponse.json(product, { status: res.status });
  } catch (e) {
    return serverError(e);
  }
}

export async function PATCH(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const product = await res.json();
    return NextResponse.json(product, { status: res.status });
  } catch (e) {
    return serverError(e);
  }
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
      method: "DELETE",
    });
    const product = await res.json();
    return NextResponse.json(product, { status: res.status });
  } catch (e) {
    return serverError(e);
  }
}