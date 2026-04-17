"use client";
import "@/components/blog.css";

import CompravenditaFarmacieHead from '@/components/CompravenditaFarmacieHead';
import CompravenditaFarmacieRg1 from '@/components/CompravenditaFarmacieRg1';
import CompravenditaFarmacieCorpo from '@/components/CompravenditaFarmacieCorpo';

export default function CompravenditaFarmacie() {
  return (
    <>
      <CompravenditaFarmacieHead />
      <div className="my-div px-4">
      <CompravenditaFarmacieRg1 />
      <CompravenditaFarmacieCorpo />
      </div>
    </>
  )
}