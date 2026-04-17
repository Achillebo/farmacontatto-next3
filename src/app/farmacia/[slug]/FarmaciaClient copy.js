"use client";

import Image from "next/image";
import FarmaciaAccordion from "@/components/FarmaciaAccordion";
import MapClient from "@/components/MapClient";
import InviaMail from "@/components/InviaMail";
import SingolaInserzioneSb from "@/components/SingolaInserzioneSb";

export default function FarmaciaClient({ farma }) {
  return (
    <div className="container my-5">
      <div className="row g-4">

        {/* MAIN CONTENT */}
        <div className="col-lg-9">
          <article className="p-4">

            <h1>{farma.titolo_inserzione}</h1>

            <Image
              src={`/immagini/farmacie-in-vendita-${farma.immagine}.jpg`}
              alt={farma.titolo_inserzione}
              width={100}
              height={100}
              className="rounded-circle"
            />

            <p>{farma.testo_inserzione}</p>

            {/* ACCORDION */}
            {farma.tipo_inserzione === 1 && (
              <FarmaciaAccordion farma={farma} />
            )}

            {/* MAPPA */}
            {farma.lat && farma.lng && (
              <div style={{ marginTop: "20px" }}>
                <MapClient
                  lat={Number(farma.lat)}
                  lng={Number(farma.lng)}
                  zoom={14}
                  raggio={1000}
                />
              </div>
            )}

            {/* FORM CONTATTO */}
            <InviaMail
              riffarma={farma.rif_farm}
              rif_titolo_inserzione={farma.titolo_inserzione}
              rif_tipo="info_ins"
            />

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