const LOCAL_DEV_URL = "http://localhost:3000";
const FALLBACK_PROD_URL = "https://example.com";

export function getSiteUrl(): string {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

  const baseUrl =
    envUrl ??
    (process.env.NODE_ENV === "development" ? LOCAL_DEV_URL : FALLBACK_PROD_URL);

  return baseUrl.replace(/\/+$/, "");
}
