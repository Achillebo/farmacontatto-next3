console.log("SLUG PAGE CARICATA");

import farmacieData from "@/data/farmacie.json";
import Image from "next/image";
import { notFound } from "next/navigation";
import MapClient from "@/components/MapClient";
import SingolaInserzioneSb from "@/components/SingolaInserzioneSb";
import InviaMail from "@/components/InviaMail";
import FarmaciaAccordion from "@/components/FarmaciaAccordion";
import envelopeIcon from "@/icone/envelope-circle-check-solid.svg";

// import dynamicImport from "next/dynamic";

// =========================
// MAP (NO SSR)
// =========================
// const MapClient = dynamicImport(() => import("@/components/MapClient"), {
//   ssr: false,
// });

// =========================
// STATIC MODE (EXPORT READY)
// =========================
export const dynamic = "force-static";
export const dynamicParams = false;

// =========================
// HELPERS
// =========================
function getAllFarmacie() {
  return Object.values(farmacieData).flat();
}

function getFarmacia(slug) {
  return getAllFarmacie().find((f) => f.url_pagina === slug);
}

// =========================
// REQUIRED FOR STATIC EXPORT
// =========================
export async function generateStaticParams() {
  const all = getAllFarmacie();

  return all
    .filter((f) => f.url_pagina)
    .map((f) => ({
      slug: f.url_pagina,
    }));
}

// =========================
// SEO METADATA
// =========================
export async function generateMetadata({ params }) {
  const slug = params?.slug;

  const farma = getFarmacia(slug);

  if (!farma) {
    return {
      title: "Farmacia non trovata",
    };
  }

  return {
    title: farma.titolo_inserzione,
    description: farma.testo_inserzione?.slice(0, 160),
    alternates: {
      canonical: `https://farmacontatto.it/farmacia/${slug}`,
    },
  };
}

// =========================
// PAGE
// =========================
export default function Page({ params }) {
  const slug = params?.slug;

  const farma = getFarmacia(slug);

  if (!farma) return notFound();

  return (
    <div className="container my-5">

      <div className="row g-4">

        {/* MAIN */}
        <div className="col-lg-9">

          <article
            className="p-4 rounded shadow-sm"
            style={{
              backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)",
            }}
          >

            <h1 className="mb-3">{farma.titolo_inserzione}</h1>

            <div className="card flex-md-row mb-4">

              {/* IMMAGINE */}
              <div className="d-none d-lg-block p-3 text-center">
                <Image
                  className="rounded-circle"
                  src={`/immagini/farmacie-in-vendita-${farma.immagine}.jpg`}
                  alt={farma.title_immagine}
                  title={farma.title_immagine}
                  width={100}
                  height={100}
                />

                <div className="mt-2">{farma.regione}</div>
              </div>

              {/* CONTENUTO */}
              <div className="card-body">

                <div className="d-flex justify-content-between flex-wrap mb-2">
                  <div className={`my-trattativa-${farma.colore_stato_trattative}`}>
                    {farma.stato_trattative}
                  </div>

                  <div className="text-muted">
                    Rif: {farma.rif_farm}
                  </div>
                </div>

                <h2 className="mt-2">{farma.titolo_inserzione}</h2>

                <p className="mt-3">{farma.testo_inserzione}</p>

                {/* ACCORDION */}
                {farma.tipo_inserzione == 1 && (
                  <div className="mt-4 mb-4 w-100">
                    <FarmaciaAccordion farma={farma} />
                  </div>
                )}

                {/* MAPPA */}
                {farma.lat && (
                  <div className="row mt-5 pt-4 border-top g-4 align-items-start">

                    <div className="col-lg-8">
                      <div className="map-wrapper">
                        <MapClient
                          lat={Number(farma.lat)}
                          lng={Number(farma.lng)}
                          zoom={Number(farma.zoom || 12)}
                          raggio={Number(farma.raggio || 1000)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 text-center">

                      <div className="p-3">
                        <Image
                          src={envelopeIcon}
                          width={50}
                          height={50}
                          alt="contatti"
                        />

                        <h5 className="mt-3">
                          Vuoi maggiori informazioni?
                        </h5>

                        <p className="small mb-3">
                          La trattativa è riservata.<br />
                          Contattaci per maggiori informazioni.
                        </p>

                        <InviaMail
                          riffarma={farma.rif_farm}
                          rif_titolo_inserzione={farma.titolo_inserzione}
                          rif_tipo="info_ins"
                        />
                      </div>

                    </div>

                  </div>
                )}

              </div> 
            </div>

          </article>

        </div>

        {/* SIDEBAR */}
        <div className="col-lg-3">
          <SingolaInserzioneSb />
        </div>

      </div>
    </div>
  );
}