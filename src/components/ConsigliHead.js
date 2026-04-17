import Image from "next/image";
import Farmacontatto_consigli from "./immagini/farmacontatto-consigli.jpg";
import ContattiBottone from "./ContattiBottone";

export const metadata = {
  title: "Consigli sulla compravendita di farmacie - Farmacontatto",
  description:
    "I consigli di Farmacontatto sulla compravendita di farmacie. Come comprare una farmacia. Come vendere la tua farmacia.",
  alternates: {
    canonical: "https://farmacontatto.it/consigli",
  },
};

export default function ConsigliHead() {
  return (
    <div
      className="px-5 text-center border-bottom"
      style={{ backgroundColor: "#dddddd" }}
    >
      <div className="mycontainer col-xxl-12">
        <div className="row align-items-center">

          {/* IMMAGINE */}
          <div className="col pt-5 col-sm-12 col-lg-6">
            <Image
              src={Farmacontatto_consigli}
              alt="Come comprare o vendere una farmacia"
              title="Come comprare o vendere una farmacia"
              width={700}
              height={500}
              className="d-block mx-lg-auto img-fluid"
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
              className="display-5 fw-bold text-body-emphasis lh-1 mb-3"
              style={{
                textShadow: "-3px 3px 6px #A39090",
                fontSize: "5vw",
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#54595f",
              }}
            >
              <span style={{ color: "#5672AD" }}>Consigli di</span>
              <br />
              <span style={{ color: "#5672AD" }}>Farma</span>
              <span style={{ color: "#8fc963" }}>con</span>
              <span style={{ color: "#5672AD" }}>tatto</span>
            </h1>

            <p
              className="lead fw-bold"
              style={{
                textShadow: "-1px 1px 2px #A39090",
                fontSize: "2.5vw",
              }}
            >
              <span style={{ color: "#5672AD" }}>
                ecco qualche consiglio per comprare o vendere una farmacia
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