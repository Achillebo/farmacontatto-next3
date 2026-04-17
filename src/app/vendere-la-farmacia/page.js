
import "@/components/blog.css";

import VendereUnaFarmaciaHead from '@/components/VendereUnaFarmaciaHead';
import VendereUnaFarmaciaRg1 from '@/components/VendereUnaFarmaciaRg1';
import VendereUnaFarmaciaCorpo from '@/components/VendereUnaFarmaciaCorpo';

export default function VendereUnaFarmacia() {

  return (
    <>
      <VendereUnaFarmaciaHead />
      <div className="my-div px-4">
      <VendereUnaFarmaciaRg1 />
      <VendereUnaFarmaciaCorpo />
      </div>
    </>
  )
}