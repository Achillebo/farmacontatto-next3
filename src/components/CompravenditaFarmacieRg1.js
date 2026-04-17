"use client";

import { Breadcrumb } from "react-bootstrap";
import Link from "next/link";

export default function CompravenditaFarmacieRg1({ regioneKey = "Italia" }) {
  return (
    <div className="my-div">
      <div className="text-sm">

        {/* BREADCRUMB */}
        <div className="text-start w-100">
          <Breadcrumb className="mb-3">
            <Breadcrumb.Item linkAs={Link} href="/">
              Home
            </Breadcrumb.Item>

            <Breadcrumb.Item active>
              {regioneKey}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        {/* CONTENUTO */}
        <div className="col-12 p-4">
          <div className="col d-flex flex-column position-static">

            <h2 className="d-inline-block text-primary-emphasis">
              CI OCCUPIAMO DI COMPRAVENDITA DI FARMACIE
            </h2>

            <div className="text-secondary-emphasis mb-4">
              Ti possiamo aiutare a portare a termine la delicata operazione di compravendita
              supportandoti in ogni sua fase
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}