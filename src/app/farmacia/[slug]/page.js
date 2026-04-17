import farmacieData from "@/data/farmacie.json";
import FarmaciaClient from "./FarmaciaClient";
import { notFound } from "next/navigation";

function getAllFarmacie() {
  return Object.values(farmacieData).flat();
}

function getFarmacia(slug) {
  return getAllFarmacie().find((f) => f.url_pagina === slug);
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const all = getAllFarmacie();

  return all
    .filter((f) => f?.url_pagina)
    .map((f) => ({
      slug: f.url_pagina,
    }));
}

export async function generateMetadata({ params }) {
  const farma = getFarmacia(params.slug);

  return {
    title: farma?.titolo_inserzione || "Farmacia",
    description: (farma?.testo_inserzione || "").slice(0, 160),
  };
}

export default function Page({ params }) {
  const farma = getFarmacia(params.slug);

  if (!farma) return notFound();

  return <FarmaciaClient farma={farma} />;
}