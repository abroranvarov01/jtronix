// app/api/upload/route.ts
import { NextRequest } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { ok, unauthorized, badRequest, serverError } from "@/lib/api-response";

const UPLOAD_DIR = path.join(process.cwd(), "public", "img", "products");
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

export async function POST(req: NextRequest) {
  try {

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) return badRequest("Fayl tanlanmagan");
    if (!ALLOWED_TYPES.includes(file.type)) {
      return badRequest("Faqat JPEG, PNG va WebP formatlar qabul qilinadi");
    }
    if (file.size > MAX_SIZE) {
      return badRequest("Fayl hajmi 5 MB dan oshmasligi kerak");
    }

    // Fayl nomini yaratish (timestamp + original nom)
    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const filePath = path.join(UPLOAD_DIR, fileName);

    // Papkani yaratish (mavjud bo'lmasa)
    await mkdir(UPLOAD_DIR, { recursive: true });

    // Yozish
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filePath, buffer);

    const publicPath = `/img/products/${fileName}`;
    return ok({ path: publicPath });
  } catch (e) {
    return serverError(e);
  }
}