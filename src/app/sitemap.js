import { getAllFarmacie } from "@/lib/farmacie";

export default function sitemap() {
  const baseUrl = "https://tuodominio.it";

  const all = getAllFarmacie();

  const regioni = new Set([
    "italia",
    "vendita",
    "ricerche",
    ...all.map(f => (f.regione || "").toLowerCase())
  ]);

  const staticPages = Array.from(regioni).flatMap(regione => {
    const pages = [
      {
        url: `${baseUrl}/farmacie/${regione}`,
        priority: 1
      }
    ];

    return pages;
  });

  return [
    {
      url: baseUrl,
      priority: 1
    },
    ...staticPages
  ];
}