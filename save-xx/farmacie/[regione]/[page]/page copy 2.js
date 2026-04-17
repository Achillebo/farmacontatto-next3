import { getFilteredFarmacie } from "@/lib/farmacie";

const ITEMS_PER_PAGE = 5;

export const dynamic = "force-static";

export async function generateStaticParams() {
  const all = getFilteredFarmacie("italia");

  const regioni = [
    "italia",
    "vendita",
    "ricerche",
    ...new Set(all.map(f => (f.regione || "").toLowerCase()))
  ];

  const params = [];

  for (const regione of regioni) {
    const data = getFilteredFarmacie(regione);
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    for (let page = 2; page <= totalPages; page++) {
      params.push({ regione, page: String(page) });
    }
  }

  return params;
}

export default function Page({ params }) {
  const all = getFilteredFarmacie(params.regione);

  const page = Number(params.page);
  const start = (page - 1) * ITEMS_PER_PAGE;

  const data = all.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="container py-4">
      <h1>{params.regione} - pagina {params.page}</h1>

      {data.map(farma => (
        <a key={farma.rif_farm} href={`/farmacia/${farma.url_pagina}`}>
          <h3>{farma.titolo_inserzione}</h3>
        </a>
      ))}
    </div>
  );
}