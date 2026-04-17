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
  return getAllFarmacie()
    .filter((f) => f?.url_pagina)
    .map((f) => ({
      slug: f.url_pagina,
    }));
}

export async function generateMetadata({ params }) {
  const farma = getFarmacia(params.slug);

  if (!farma) {
    return {
      title: "Farmacia non trovata",
      description: "",
    };
  }

  return {
    title: farma.titolo_inserzione,
    description: (farma.testo_inserzione || "").slice(0, 160),
  };
}

export default function Page({ params }) {
  const farma = getFarmacia(params.slug);

  if (!farma) return notFound();

  return <FarmaciaClient farma={farma} />;
}