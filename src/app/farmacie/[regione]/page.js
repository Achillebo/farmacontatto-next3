import FarmacieInVenditaLista from "@/components/FarmacieInVenditaLista";
import { getAllFarmacie, normalize } from "@/lib/farmacie";
import Link from "next/link";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const all = getAllFarmacie();

  const regioni = new Set([
    "italia",
    "vendita",
    "ricerche",
    ...all.map(f => normalize(f.regione))
  ]);

  return [...regioni].map(regione => ({ regione }));
}

export default function Page({ params }) {
  return (
    <FarmacieInVenditaLista
      regione={params.regione}
    />
  );
}