import type { MetadataRoute } from "next";

const baseUrl = "https://straviatransferagency.com";

const routes = [
  { en: "/", tr: "/tr" },
  { en: "/about-us", tr: "/tr/hakkimizda" },
  { en: "/services", tr: "/tr/hizmetler" },
  { en: "/destinations", tr: "/tr/destinasyonlar" },
  { en: "/fleet", tr: "/tr/filo" },
  { en: "/agency-partnership", tr: "/tr/acente-isbirligi" },
  { en: "/contact", tr: "/tr/iletisim" }
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => [
    {
      url: `${baseUrl}${route.en === "/" ? "" : route.en}`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}${route.tr}`,
      lastModified: new Date()
    }
  ]);
}
