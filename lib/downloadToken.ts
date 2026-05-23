import crypto from "crypto";

function getSecret(): string {
  const secret = process.env.DOWNLOAD_SECRET;
  if (secret && secret.length > 0) return secret;

  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "DOWNLOAD_SECRET environment variable is required in production. " +
        "Generate one with: openssl rand -base64 32"
    );
  }

  console.warn(
    "[downloadToken] DOWNLOAD_SECRET not set — using insecure dev fallback. " +
      "This must be set in production."
  );
  return "dev-secret-change-in-production";
}

const TOKEN_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

interface TokenPayload {
  slug: string;
  orderID: string;
  expiry: number;
}

function sign(data: string): string {
  return crypto.createHmac("sha256", getSecret()).update(data).digest("base64url");
}

export function createDownloadToken(slug: string, orderID: string): string {
  const payload: TokenPayload = { slug, orderID, expiry: Date.now() + TOKEN_TTL_MS };
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${data}.${sign(data)}`;
}

export function verifyDownloadToken(token: string): TokenPayload | null {
  try {
    const dot = token.lastIndexOf(".");
    if (dot === -1) return null;
    const data = token.slice(0, dot);
    const sig = token.slice(dot + 1);

    const expected = sign(data);
    if (
      sig.length !== expected.length ||
      !crypto.timingSafeEqual(Buffer.from(sig, "base64url"), Buffer.from(expected, "base64url"))
    ) {
      return null;
    }

    const payload = JSON.parse(Buffer.from(data, "base64url").toString()) as TokenPayload;
    if (Date.now() > payload.expiry) return null;

    return payload;
  } catch {
    return null;
  }
}
