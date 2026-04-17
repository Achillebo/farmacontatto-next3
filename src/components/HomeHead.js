"use client";

import Image from "next/image";
import Farmacontatto_compravendita_farmacie from "./immagini/donna-farmacista.jpg";
import ContattiBottone from "./ContattiBottone";

export default function HomeHead() {
  return (
    <div className="mycontainer">
      <div
        className="px-5 text-center border-bottom"
        style={{ backgroundColor: "#daecf4" }}
      >
        <div className="row flex-lg-row-reverse align-items-center">

          {/* IMMAGINE */}
          <div className="col pt-5 col-sm-12 col-lg-6">
            <Image
              src={Farmacontatto_compravendita_farmacie}
              alt="Farmacontatto compravendita farmacie"
              className="d-block mx-lg-auto img-fluid"
              width={700}
              height={500}
              priority
            />
          </div>

          {/* TESTO */}
          <div
            className="col-lg-6 mb-3"
            style={{
              borderRadius: "20px",
              backgroundColor: "#f7f9fc",
              padding: "20px",
            }}
          >
            <h1
              className="display-5 fw-bold lh-1 mb-3"
              style={{
                textShadow: "-3px 3px 6px #A39090",
                fontSize: "5vw",
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#54595f",
              }}
            >
              <span style={{ color: "#5672AD" }}>Farma</span>
              <span style={{ color: "#8fc963" }}>con</span>
              <span style={{ color: "#5672AD" }}>tatto</span>
            </h1>

            <p
              className="lead fw-bold"
              style={{
                textShadow: "-1px 1px 2px #A39090",
                fontSize: "2.2vw",
              }}
            >
              <span style={{ color: "#5672AD" }}>
                Se stai cercando una farmacia in vendita, sei nel posto giusto,
                noi ti possiamo aiutare
              </span>
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <ContattiBottone etichetta="Contattaci" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}