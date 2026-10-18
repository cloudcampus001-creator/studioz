import type { MetadataRoute } from "next";
import { site, programs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/programs", "/apprenticeships", "/enroll", "/contact", "/about", "/privacy", "/terms"];
  const programRoutes = programs.map((p) => `/programs/${p.slug}`);

  return [...staticRoutes, ...programRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));
}
