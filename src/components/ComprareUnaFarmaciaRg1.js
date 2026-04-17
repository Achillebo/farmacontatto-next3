"use client";

import Link from "next/link";
import { Breadcrumb } from "react-bootstrap";

export const ComprareUnaFarmaciaRg1 = () => {
  return (
    <div className="my-div">
      <div className="text-sm">
        <div className="text-start w-100">
          <Breadcrumb className="mb-3">
            <Breadcrumb.Item linkAs={Link} href="/">
              Home
            </Breadcrumb.Item>

            <Breadcrumb.Item active>
              Comprare una farmacia
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="col-12 p-4">
          <div
            className="col d-flex flex-column position-static"
            id="Perché scegliere noi"
          >
            <h2 className="d-inline-block text-primary-emphasis">
              PERCHÉ SCEGLIERE NOI
            </h2>

            <div className="my-div text-secondary-emphasis mb-4">
              Forse ti stai chiedendo perché dovresti scegliere noi per comprare una farmacia e non altri agenti intermediari
              <br />
              Hai già deciso di comprare?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprareUnaFarmaciaRg1;