import FarmacieInVenditaLista from "@/components/FarmacieInVenditaLista";
import FarmacieInVenditaRig1 from "@/components/FarmacieInVenditaRig1";

export const metadata = {
  title: "Farmacie in vendita | Farmacontatto",
  description:
    "Elenco farmacie in vendita in tutta Italia. Farmacontatto intermediazione e compravendita farmacie.",
  alternates: {
    canonical: "https://farmacontatto.it/farmacie-in-vendita",
  },
};

export const dynamic = "force-static";

export default function Page() {
  return (
    <div className="my-div px-4">
      <FarmacieInVenditaRig1 />
      <FarmacieInVenditaLista />
    </div>
  );
}