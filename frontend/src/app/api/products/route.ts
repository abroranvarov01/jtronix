// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { serverError } from "@/lib/api-response";

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    const products = await res.json();
    return NextResponse.json(products, { status: 200 });
  } catch (e) {
    return serverError(e);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const product = await res.json();
    return NextResponse.json(product, { status: res.status });
  } catch (e) {
    return serverError(e);
  }
}