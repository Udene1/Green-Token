import type { MetadataRoute } from "next";

const siteUrl = "https://kenneth-elioku-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${siteUrl}/work/compflow`,
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];
}
