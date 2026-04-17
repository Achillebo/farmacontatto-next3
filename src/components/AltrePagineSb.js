"use client";

import Image from "next/image";
import Link from "next/link";

import Consigli_comprare_una_farmacia from "./immagini/consigli-comprare-una-farmacia.png";
import Consigli_compravendita_farmacie from "./immagini/consigli-compravendita-farmacie.png";
import Consigli_vendere_una_farmacia from "./immagini/consigli-vendere-una-farmacia.png";

export const AltrePagineSb = () => {
  return (
    <div className="w-100">

      <h4 className="fst-italic pt-4 text-center">
        Altre pagine
      </h4>

      <ul className="list-unstyled w-100">

        {/* 1 */}
        <li>
          <Link
            href="/compravendita-farmacie"
            className="d-flex flex-column flex-lg-row gap-2 align-items-center justify-content-center py-3 link-body-emphasis text-decoration-none border-top"
          >
            <Image
              src={Consigli_compravendita_farmacie}
              alt="Compravendita farmacie"
              title="Compravendita farmacie"
              width={150}
              className="img-fluid"
            />

            <div className="col-lg-6 text-center text-lg-start">
              <h6 className="mb-0">
                Farmacontatto <br />
                Compravendita di farmacie
              </h6>
              <small className="text-body-secondary">
                Marzo, 2025
              </small>
            </div>
          </Link>
        </li>

        {/* 2 */}
        <li>
          <Link
            href="/comprare-una-farmacia"
            className="d-flex flex-column flex-lg-row gap-2 align-items-center justify-content-center py-3 link-body-emphasis text-decoration-none border-top"
          >
            <Image
              src={Consigli_comprare_una_farmacia}
              alt="Comprare una farmacia"
              title="Comprare una farmacia"
              width={150}
              className="img-fluid"
            />

            <div className="col-lg-6 text-center text-lg-start">
              <h6 className="mb-0">
                Farmacontatto <br />
                Comprare una farmacia
              </h6>
              <small className="text-body-secondary">
                Marzo, 2025
              </small>
            </div>
          </Link>
        </li>

        {/* 3 */}
        <li>
          <Link
            href="/vendere-la-farmacia"
            className="d-flex flex-column flex-lg-row gap-2 align-items-center justify-content-center py-3 link-body-emphasis text-decoration-none border-top"
          >
            <Image
              src={Consigli_vendere_una_farmacia}
              alt="Vendere una farmacia"
              title="Vendere una farmacia"
              width={150}
              className="img-fluid"
            />

            <div className="col-lg-6 text-center text-lg-start">
              <h6 className="mb-0">
                Farmacontatto <br />
                Vendere una farmacia
              </h6>
              <small className="text-body-secondary">
                Marzo, 2025
              </small>
            </div>
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default AltrePagineSb;