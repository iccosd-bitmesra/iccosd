import { NextRequest } from "next/server";
import { searchContent } from "@/lib/search-content";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? "";
  const results = searchContent(q);
  return Response.json({ results });
}
