import Link from "next/link";

export const FarmacieInVenditaRig1 = () => {
  return (
<>
  <div className="my-div pt-5">
    <div className="col-12 p-4 pt-5 d-flex justify-content-center">

      <div className="d-flex flex-column text-center align-items-center">

        <h2 className="text-primary-emphasis">
          FARMACONTATTO TI AIUTA
        </h2>

        <h2 className="text-primary-emphasis mb-2">
          nella compravendita di farmacie
        </h2>

        <div className="my-div mb-4">
          Se vuoi comprare una farmacia, se vuoi vendere una farmacia,
          se vuoi una valutazione della tua farmacia,<br />
          noi ti possiamo fornire tutte le informazioni e i servizi di cui hai bisogno
        </div>

        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-warning btn-lg">
            <Link className="btn-href-black" href="/consigli">
              Scopri di più
           </Link>
          </button>
        </div>

      </div>

    </div>
  </div>
</>
  )
}

export default FarmacieInVenditaRig1;