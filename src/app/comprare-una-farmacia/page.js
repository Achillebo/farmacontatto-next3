import "@/components/blog.css";

import ComprareUnaFarmaciaHead from '@/components/ComprareUnaFarmaciaHead';
import ComprareUnaFarmaciaRg1 from '@/components/ComprareUnaFarmaciaRg1';
import ComprareUnaFarmaciaCorpo from '@/components/ComprareUnaFarmaciaCorpo';

export default function ComprareUnaFarmacia() {

  return (
    <>
      <ComprareUnaFarmaciaHead />
      <div className="my-div px-4">
        <ComprareUnaFarmaciaRg1 />
        <ComprareUnaFarmaciaCorpo />
      </div>
    </>
  )
}