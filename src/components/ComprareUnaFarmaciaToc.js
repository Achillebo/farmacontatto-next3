"use client";

import Link from "next/link";

export const ComprareUnaFarmaciaToc = () => {
  const items = [
    "Come comprare una farmacia",
    "La svolta",
    "Il segreto del successo",
  ];

  return (
    <div className="p-5 bg-body-tertiary rounded">
      <h4 className="fst-italic">Contenuti della pagina</h4>

      <p style={{ textAlign: "left", fontSize: "0.9em", lineHeight: "1.7em" }}>
        {items.map((item) => {
          const id = item.toLowerCase().replace(/\s+/g, "-");

          return (
            <span key={id}>
              <Link href={`#${id}`} className="d-block">
                - {item}
              </Link>
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default ComprareUnaFarmaciaToc;