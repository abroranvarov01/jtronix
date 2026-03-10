// lib/api-response.ts
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export function ok<T>(data: T, status = 200) {
  return NextResponse.json(data, { status });
}

export function created<T>(data: T) {
  return NextResponse.json(data, { status: 201 });
}

export function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export function unauthorized() {
  return NextResponse.json({ error: "Avtorizatsiya talab qilinadi" }, { status: 401 });
}

export function notFound(message = "Topilmadi") {
  return NextResponse.json({ error: message }, { status: 404 });
}

export function serverError(error: unknown) {
  console.error(error);
  return NextResponse.json({ error: "Server xatosi" }, { status: 500 });
}

export function validationError(error: ZodError) {
  return NextResponse.json(
    { error: "Validatsiya xatosi", fields: error.flatten().fieldErrors },
    { status: 422 }
  );
}