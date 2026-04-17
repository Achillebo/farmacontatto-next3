"use client";

import { useMemo } from "react";
import Link from "next/link";
import farmacieData from "../data/farmacie.json";

export const RegioniSb = () => {
  const allData = useMemo(() => {
    return Object.values(farmacieData).flat();
  }, []);

  const stats = useMemo(() => {
    let totale = allData.length;
    let vendite = 0;
    let ricerche = 0;

    allData.forEach((f) => {
      if (f.tipo_inserzione == 1) vendite++;
      if (f.tipo_inserzione == 2) ricerche++;
    });

    return { totale, vendite, ricerche };
  }, [allData]);

  const regioni = useMemo(() => {
    const map = {};

    allData.forEach((f) => {
      const r = (f.regione || "Italia").trim();
      if (!map[r]) map[r] = 0;
      map[r]++;
    });

    return Object.entries(map).map(([regione, numero]) => ({
      regione,
      numero,
    }));
  }, [allData]);

  return (
    <div className="d-flex flex-column align-items-center text-center">

      <h4 className="fst-italic pt-2">Inserzioni Farmacie</h4>

      <div className="my-sidebar mb-3 d-flex flex-column align-items-center">

        <Link href="/farmacie/italia">
          Tutte le inserzioni ({stats.totale})
        </Link>

        <Link href="/farmacie/vendita">
          Farmacie in vendita ({stats.vendite})
        </Link>

        <Link href="/farmacie/ricerche">
          Compro farmacia ({stats.ricerche})
        </Link>

      </div>

      <h4 className="fst-italic pt-2">Per Regione</h4>

      <div className="my-sidebar d-flex flex-column align-items-center">

        {regioni.map((r) => (
          <Link
            key={r.regione}
            href={`/farmacie/${r.regione.toLowerCase()}`}
          >
            {r.regione} ({r.numero})
          </Link>
        ))}

      </div>

    </div>
  );
};

export default RegioniSb;