import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wesleysantos.site",
      lastModified: new Date(),
    },
  ];
}