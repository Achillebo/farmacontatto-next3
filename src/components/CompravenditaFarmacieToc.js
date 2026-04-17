"use client";

import Link from "next/link";

export const CompravenditaFarmacieToc = () => {
  const items = [
    "Comprare farmacie",
    "Il supporto giusto",
    "Le tue aspettative",
    "Cosa considerare",
    "Vendere farmacie",
    "Affidati a esperti",
    "Perché affidarsi a professionisti",
    "Farmacontatto: il partner ideale",
  ];

  return (
    <div className="p-5 bg-body-tertiary rounded">
      <h4 className="fst-italic">Contenuti della pagina</h4>

      <p style={{ textAlign: "left", fontSize: "0.9em", lineHeight: "1.7em" }}>
        {items.map((item) => {
          const id = item.toLowerCase().replace(/\s+/g, "-");

          return (
            <span key={id}>
              <Link href={`#${id}`} className="my-AncorLink">
                - {item}
              </Link>
              <br />
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default CompravenditaFarmacieToc;