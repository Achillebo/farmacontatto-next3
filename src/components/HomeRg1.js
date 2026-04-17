import Link from "next/link";

export const HomeRg1 = () => {
  return (
    <>
      <div className="my-div">
        <div className="col-12 p-4 text-center">
          <div className="d-flex flex-column align-items-center position-static">

            <h2 className="text-primary-emphasis">
              FARMACONTATTO TI AIUTA
            </h2>

            <h2 className="text-primary-emphasis mb-2">
              nella compravendita di farmacie
            </h2>

            <div className="mb-4" style={{ maxWidth: "800px" }}>
              Se vuoi comprare una farmacia, se vuoi vendere una farmacia,
              se vuoi una valutazione della tua farmacia,
              <br />
              noi ti possiamo fornire tutte le informazioni e i servizi di cui hai bisogno
            </div>

            <div className="d-flex justify-content-center">
              <Link className="btn btn-warning btn-md" href="/consigli">
                Scopri di più
             </Link>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default HomeRg1;