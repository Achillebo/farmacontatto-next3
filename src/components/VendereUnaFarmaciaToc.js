"use client";

import Link from "next/link";

export const VendereUnaFarmaciaToc = () => {
  const items = [
    "Vendere la farmacia",
    "Come vendere la farmacia",
    "Farlo nel modo giusto",
    "Quando è il momento giusto",
    "Affidarsi a professionisti",
    "La riservatezza è fondamentale",
    "Collaboriamo con diverse agenzie",
    "Uno dei maggiori ostacoli",
    "Mediatori abilitati",
    "Farmacontatto: il supporto ideale",
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

export default VendereUnaFarmaciaToc;