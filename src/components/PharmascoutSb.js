import Image from "next/image";
import Link from "next/link";
import Pharmascout_logo from './immagini/pharmascout-logo.jpg';
import Pharmascout_osservatorio_logo from './immagini/pharmascout-osservatorio-logo.jpg';

export const PharmascoutSb = () => {
  return (
    <>
      <div className="w-100 pt-4 text-center d-flex flex-column align-items-center">

        <h4 className="fst-italic">Su Pharmascout.it</h4>

        <ul className="list-unstyled w-100 d-flex flex-column align-items-center">

          <li className="w-100 d-flex justify-content-center">
            <Link
              className="d-flex flex-column flex-lg-row gap-2 align-items-center justify-content-center py-3 link-body-emphasis text-decoration-none border-top w-100"
              href="https://pharmascout.it"
              target="_blank"
            >
              <Image
                src={Pharmascout_logo}
                className="img-fluid"
                alt="Compravendita farmacie"
                title="Compravendita farmacie"
                width="120"
                loading="lazy"
              />

              <div className="col-lg-6 text-center text-lg-start">
                <h6 className="mb-0">
                  <b>Pharmascout.it</b><br /><br />
                  Inserzioni farmacie in vendita
                </h6>
              </div>
            </Link>
          </li>

          <li className="w-100 d-flex justify-content-center">
            <Link
              className="d-flex flex-column flex-lg-row gap-2 align-items-center justify-content-center py-3 link-body-emphasis text-decoration-none border-top w-100"
              href="https://pharmascout.it/osservatorio-farmacie-pharmascout/"
              target="_blank"
            >
              <Image
                src={Pharmascout_osservatorio_logo}
                className="img-fluid"
                alt="Comprare una farmacia"
                title="Comprare una farmacia"
                width="120"
                loading="lazy"
              />

              <div className="col-lg-6 text-center text-lg-start">
                <h6 className="mb-0">
                  <b>Pharmascout.it</b><br /><br />
                  Osservatorio farmacie
                </h6>
              </div>
            </Link>
          </li>

        </ul>

      </div>
    </>
  )
}

export default PharmascoutSb;