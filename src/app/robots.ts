import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all crawlers on the canonical domain
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",     // block any internal API routes
          "/_next/",   // block Next.js internals
        ],
      },
    ],
    sitemap: "https://hivarsoft.com/sitemap.xml",
    // Tells crawlers the authoritative host — key for the Vercel canonical trap
    host: "https://hivarsoft.com",
  };
}
