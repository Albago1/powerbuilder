import { NextRequest, NextResponse } from "next/server";
import { verifyDownloadToken } from "@/lib/downloadToken";
import { readFile } from "fs/promises";
import path from "path";

const VALID_LANGS = ["en", "de", "sq"] as const;
type Lang = (typeof VALID_LANGS)[number];

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const token = searchParams.get("token");
  const lang = searchParams.get("lang") as Lang | null;

  if (!token) {
    return new NextResponse("Missing download token", { status: 400 });
  }

  if (!lang || !VALID_LANGS.includes(lang)) {
    return new NextResponse("Invalid or missing language parameter", { status: 400 });
  }

  const payload = verifyDownloadToken(token);
  if (!payload) {
    return new NextResponse(
      "This download link is invalid or has expired. Please contact support if you have already paid.",
      { status: 403 }
    );
  }

  const { slug } = payload;

  try {
    const filePath = path.join(process.cwd(), "public", "downloads", slug, `${lang}.pdf`);
    const fileBuffer = await readFile(filePath);
    const filename = `powerbuilder-${slug}-${lang}.pdf`;

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new NextResponse(
      "Program file not found. Please contact support.",
      { status: 404 }
    );
  }
}
