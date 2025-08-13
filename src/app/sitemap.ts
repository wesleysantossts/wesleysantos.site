import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wesleysantos.site",
      lastModified: new Date(),
    },
    {
      url: "https://www.wesleysantos.site",
      lastModified: new Date(),
    },
  ];
}