
import FarmacieInVenditaLista from "@/components/FarmacieInVenditaLista";
import FarmacieInVenditaRig1 from "@/components/FaramcieInVenditaRig1";

export const metadata = {
  title: "Farmacie in vendita | Farmacontatto",
  description:
    "Elenco farmacie in vendita in tutta Italia. Farmacontatto intermediazione e compravendita farmacie.",
  alternates: {
    canonical: "https://farmacontatto.it/farmacie-in-vendita",
  },
};

export default function Page() {
  return (
    <>
      <FarmacieInVenditaRig1 />
      <FarmacieInVenditaLista />
    </>
  );
}