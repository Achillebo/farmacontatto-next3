import FarmacieInVenditaLista from "@/components/FarmacieInVenditaLista";

export default function Page({ params }) {
  return <FarmacieInVenditaLista regione={params.slug} page={1} />;
}