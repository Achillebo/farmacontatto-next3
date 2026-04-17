"use client";

import Image from "next/image";
import FarmaciaAccordion from "@/components/FarmaciaAccordion";
import MapClient from "@/components/MapClient";
import InviaMail from "@/components/InviaMail";
import SingolaInserzioneSb from "@/components/SingolaInserzioneSb";
import envelopeIcon from "@/icone/envelope-circle-check-solid.svg";
import Accordion from "react-bootstrap/Accordion";

export default function FarmaciaClient({ farma }) {
  const hasMap = farma.lat && farma.lng;

  return (
    <div className="my-div mt-5">
      <div className="row g-2 mt-5">
        <div className="row g-2 mt-4">

          {/* MAIN COL */}
          <div className="col-md-9">

            <article
              className="blog-post p-4"
              style={{
                backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)",
              }}
            >
              <div className="row  pt-3">
                <div className="col-md-12">
                  <div className="row">

                    <h1 className="blog-post-meta">
                      {farma.titolo_inserzione}
                    </h1>

                    <div className="col-md-12">

                        <div className="card flex-md-row mb-4 box-shadow">

                        {/* LEFT */}
                        <div className="d-none d-lg-block text-center">
                          <Image
                            src={`/immagini/farmacie-in-vendita-${farma.immagine}.jpg`}
                            alt={farma.titolo_inserzione}
                            width={100}
                            height={100}
                            className="rounded-circle m-3"
                          />

                          <br />
                          {farma.regione}
                        </div>

                        {/* RIGHT */}
                        <div className="card-body align-items-start flex-grow-1">

                          <div className="container-fluid">

                            <div className="row justify-content-between">
                              <div className="col-md-12 col-xl-6">
                                <div className={"mx-1 my-trattativa-" + farma.colore_stato_trattative}>
                                  {farma.stato_trattative}
                                </div>
                              </div>

                              <div className="col-sm-12 text-center col-xl-4 text-end">
                                <div className="my-text-dark">
                                  <span>Rif: {farma.rif_farm}</span>
                                </div>
                              </div>
                            </div>

                            <h2 className="my-text-dark mt-2">
                              {farma.titolo_inserzione}
                            </h2>

                            {/* ⚠️ QUESTO È IL PUNTO CRITICO */}
                            <p className="my-card-text text-start mb-3">
                              {farma.testo_inserzione}
                            </p>

                            {/* ACCORDION */}
                            {farma.tipo_inserzione == 1 && (
                              <div className="col-12 mt-4 mb-4">
                                <Accordion defaultActiveKey="0">
                                  <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                      Fatturato: {farma.fatturato}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      {farma.testo_fatturato}
                                    </Accordion.Body>
                                  </Accordion.Item>

                                  <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                      Finanziabilità: {farma.finanziabilita}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      {farma.testo_finanziabilita}
                                    </Accordion.Body>
                                  </Accordion.Item>

                                  <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                      Altre caratteristiche: {farma.altre_caratteristiche}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      {farma.testo_altre_caratteristiche}
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                              </div>
                            )}

                            {/* MAP + CONTACT */}
                            <div className="row flex-md-row text-center pt-3">

                              {farma.lat && farma.lng && (
                                <>
                                  <div className="col-md-12 col-xl-8">
                                    <MapClient
                                      lat={Number(farma.lat)}
                                      lng={Number(farma.lng)}
                                      zoom={farma.zoom || 13}
                                      raggio={farma.raggio || 1000}
                                    />
                                  </div>

                                  <div className="col-md-12 col-xl-4 mt-3">
                                    <h2>Vuoi maggiori informazioni?</h2>

                                    <p>
                                      La trattativa è riservata.
                                      <br />
                                      Contattaci per maggiori informazioni.
                                    </p>

                                    <InviaMail
                                      riffarma={farma.rif_farm}
                                      rif_titolo_inserzione={farma.titolo_inserzione}
                                      rif_tipo="info_ins"
                                    />
                                  </div>
                                </>
                              )}

                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </article>


          </div>

          {/* SIDEBAR */}
<div className="col-md-3">
  <div className="sticky-top" style={{ top: "80px" }}>
    <SingolaInserzioneSb />
  </div>
</div>

        </div>
      </div>
    </div>
  );
}