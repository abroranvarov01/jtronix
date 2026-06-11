// Base URL for NestJS backend API
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

// Backend origin for serving static files (uploads)
export const BACKEND_URL = API_URL.replace(/\/api\/?$/, "");

// Convert a backend path like "/uploads/file.jpg" to a full URL
export function imgUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${BACKEND_URL}${path}`;
}
