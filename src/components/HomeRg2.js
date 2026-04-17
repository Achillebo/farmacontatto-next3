import Image from "next/image";
import Ricerca from './immagini/ricerca.png';
import ChkOk from './immagini/check.png';
import Link from "next/link";

export const HomeRg2 = () => {
  return (
    <>
      <div className="my-div">
        <div className="Mycontainer">
          <div className="row pb-0 p-5 align-items-center"
            style={{ backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)" }}
          >
            <div className="col-md-6 col-lg-4 order-sm-12" id='Comprare-una-farmacia'>
              <Image src={Ricerca} className="d-block mx-lg-auto img-fluid" alt="Ricerca farmacie in vendita" title="Ricerca farmacie in vendita" width="720" loading="lazy" />
            </div>
            <div className="col-md-6 col-lg-8 order-sm-1">
              <p style={{ color: '#f57e20', fontWeight: 'bold', fontSize: '1.1em', textAlign: 'left' }}>RICERCA FARMACIE IN VENDITA</p>{' '}
              <h1 className="mb-2 text-primary-emphasis text-start">
                Farmacontatto, per cercare e comprare una farmacia</h1>
              <p className="mb-1 mb-3 text-start">
                Vuoi comprare una farmacia, ma non sai come trovarla e da che parte iniziare.
              </p>
              <p className="mb-1 mb-3 text-start">
                Sei preoccupato perché è una cosa seria e complicata.
              </p>
              <p className="mb-1 mb-3 text-start">
                Hai ragione, ma Farmacontatto ti offre tutti i servizi di cui hai bisogno.
                E’ fondamentale un colloquio conoscitivo e riservato.
              </p>
              <p className="mb-1 mb-3 text-start">
                Parleremo delle tue aspettative lavorative ed economiche per proporti la farmacia in vendita più adatta e in linea con le tue esigenze.
              </p>

              <div className="row">
                <div className="add-item text-center col-sm-12 col-md-10 col-lg-12 mb-2">
                  <ul id="list" className="list-group mt-2 pb-2 gap-0 fw-bold" >
                    <li className="list-group-item border-0 d-flex align-items-center">
                      <Image src={ChkOk} alt="Comprare una farmacia" title="Comprare una farmacia" width="16" height="16" />
                      <div style={{ paddingLeft: "1em" }}>Mantieni la massima riservatezza con tutti
                      </div>
                    </li>
                    <li className="list-group-item border-0 d-flex align-items-center">
                      <Image src={ChkOk} alt="Bootstrap Themes" width="16" height="16" />
                      <div style={{ paddingLeft: "1em" }}>Richiedi un incontro
                      </div>
                    </li>
                    <li className="list-group-item border-0 d-flex align-items-center">
                      <Image src={ChkOk} alt="Bootstrap Themes" width="16" height="16" />
                      <div style={{ paddingLeft: "1em" }}>Raccontaci le tue esigenze, i tuoi sogni
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">

                <Link className="btn btn-warning btn-md" href="/comprare-una-farmacia">
                  Scopri di più
               </Link>
              </div>


            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default HomeRg2;





