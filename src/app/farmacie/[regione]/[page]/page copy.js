import FarmacieInVenditaLista from "@/components/FarmacieInVenditaLista";
import { getAllFarmacie } from "@/lib/farmacie";
import Link from "next/link";

const ITEMS_PER_PAGE = 5;

// 🔥 obbligatorio per output: "export"
export const dynamic = "force-static";

export async function generateStaticParams() {
  const all = getAllFarmacie();

  const regioni = [
    "italia",
    "vendita",
    "ricerche",
    ...new Set(all.map(f => (f.regione || "").toLowerCase()))
  ];

  const params = [];

  for (const regione of regioni) {
    const data = all.filter(f => {
      if (regione === "vendita") return f.tipo_inserzione == 1;
      if (regione === "ricerche") return f.tipo_inserzione == 2;
      if (regione === "italia") return true;
      return (f.regione || "").toLowerCase() === regione;
    });

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    // pagina 1 (opzionale ma consigliata per export completo)
    params.push({ regione, page: "1" });

    for (let page = 2; page <= totalPages; page++) {
      params.push({
        regione,
        page: String(page)
      });
    }
  }

  return params;
}

export default function Page({ params }) {
  return (
    <FarmacieInVenditaLista
      regione={params.regione}
      page={params.page}
    />
  );
}