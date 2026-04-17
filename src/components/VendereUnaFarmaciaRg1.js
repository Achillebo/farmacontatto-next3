"use client";

import Link from "next/link";
import { Breadcrumb } from "react-bootstrap";

export const VendereUnaFarmaciaRg1 = () => {
  return (
    <div className="my-div">
      <div className="text-sm">
        <div className="text-start w-100">
          <Breadcrumb className="mb-3">
            <Breadcrumb.Item linkAs={Link} href="/">
              Home
            </Breadcrumb.Item>

            <Breadcrumb.Item active>
              Vendere la farmacia
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="col-12 p-4">
          <div
            className="col d-flex flex-column position-static"
            id="Perché scegliere noi"
          >
            <h2 className="d-inline-block text-primary-emphasis">
              SEI UN TITOLARE E VUOI VENDERE LA TUA FARMACIA
            </h2>

            <div className="my-div text-secondary-emphasis mb-4">
              Desideri una valutazione per poter maturare una decisione consapevole?
              <br />
              Hai già deciso di vendere?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendereUnaFarmaciaRg1;