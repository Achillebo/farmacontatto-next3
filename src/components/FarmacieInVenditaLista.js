"use client";

import "@/components/blog.css";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import FarmacieInVenditaSb from "@/components/FarmacieInVenditaSb"; // ✅ FIX QUI

import { seoRegioni } from "@/data/seoTestiRegioni";
import farmacieData from "@/data/farmacie.json";
import { normalize } from "@/lib/farmacie";

const ITEMS_PER_PAGE = 5;

export default function FarmacieInVenditaLista({
  regione = "italia",
  page = 1,
}) {
  const regioneKey = (regione || "italia").toLowerCase();
  const currentPage = Number(page || 1);

  const allData = useMemo(() => {
    return Object.values(farmacieData).flat();
  }, []);

  const filteredData = useMemo(() => {
    let data = [...allData];

    const regioneNorm = normalize(regioneKey);

    if (regioneNorm === "vendita") {
      data = data.filter((f) => f.tipo_inserzione == 1);
    } else if (regioneNorm === "ricerche") {
      data = data.filter((f) => f.tipo_inserzione == 2);
    } else if (regioneNorm !== "italia") {
      data = data.filter((f) => normalize(f.regione) === regioneNorm);
    }

    return data;
  }, [allData, regioneKey]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const paginated = filteredData.slice(start, end);

  const seoContent = seoRegioni[regioneKey] || seoRegioni.italia;

  return (
    <div className="container py-4">
      <div className="row g-4">

        {/* MAIN */}
        <div className="col-lg-9 col-md-8">
          <article className="p-4 w-100">

            {/* BREADCRUMB */}
            <Breadcrumb className="mb-3">
              <Breadcrumb.Item linkAs={Link} href="/">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                {regioneKey}
              </Breadcrumb.Item>
            </Breadcrumb>

            {/* TITOLI */}
            <h1 className="text-center">{seoContent.titolo}</h1>

            <div className="mt-3">
              <h2>{seoContent.titolo}</h2>
              <div dangerouslySetInnerHTML={{ __html: seoContent.testo }} />
            </div>

            {/* LISTA */}
            <div className="mt-4">
              {paginated.map((farma) => (
                <div className="card mb-3 p-3" key={farma.rif_farm}>
                  <div className="row g-3 align-items-center">

                    <div className="col-md-2 text-center">
                      <Link href={`/farmacia/${farma.url_pagina}`}>
                        <Image
                          src={`/immagini/farmacie-in-vendita-${farma.immagine}.jpg`}
                          alt={farma.title_immagine}
                          width={100}
                          height={100}
                          className="rounded-circle"
                        />
                      </Link>

                      <div className="mt-2 small text-muted">
                        {farma.regione}
                      </div>
                    </div>

                    <div className="col-md-10">

                      <div className="d-flex justify-content-between w-100">
                        <div className={`my-trattativa-${farma.colore_stato_trattative}`}>
                          {farma.stato_trattative}
                        </div>
                        <div>Rif: {farma.rif_farm}</div>
                      </div>

                      <Link href={`/farmacia/${farma.url_pagina}`}>
                        <h2 className="mt-2">{farma.titolo_inserzione}</h2>
                      </Link>

                      <p>{farma.testo_inserzione}</p>

                      <Link
                        className="btn btn-warning"
                        href={`/farmacia/${farma.url_pagina}`}
                      >
                        Scopri di più
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* PAGINAZIONE */}
            <div className="d-flex gap-2 mt-4 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => {
                const pageNum = i + 1;

                const url =
                  pageNum === 1
                    ? `/farmacie-in-vendita/${regioneKey}`
                    : `/farmacie-in-vendita/${regioneKey}/${pageNum}`;

                return (
                  <Link
                    key={pageNum}
                    href={url}
                    className={`btn btn-sm ${
                      pageNum === currentPage
                        ? "btn-dark"
                        : "btn-outline-dark"
                    }`}
                  >
                    {pageNum}
                  </Link>
                );
              })}
            </div>

          </article>
        </div>

        {/* SIDEBAR */}
        <div className="col-lg-3 col-md-4">
          <FarmacieInVenditaSb />
        </div>

      </div>
    </div>
  );
}