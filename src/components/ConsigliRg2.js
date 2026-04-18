import Image from "next/image";
import Consigli_compravendita_farmacie from './immagini/consigli-compravendita-farmacie.png';
import Link from "next/link";

export const ConsigliRg2 = () => {
  return (
    <>
<div className="container-fluid p-3">
  <div className="row">
    <div className="col-12">

          <div className="row pb-0 p-5 align-items-center"
            style={{ backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)" }}
          >
            <div className="col-md-6 col-lg-6 order-sm-12 p-4" id='Comprare una farmacia'>
             <Link href="/compravendita-farmacie">
                <Image src={Consigli_compravendita_farmacie}
                  className="d-block mx-lg-auto img-fluid" alt="Compravendita Farmacie" title="Compravendita Farmacie" width="720" loading="lazy" />
             </Link>
            </div>
            <div className="col-md-6 col-lg-6 order-sm-1">

              <h1 className="mb-2 text-primary-emphasis text-start" 
                style={{ color: '#f57e20', fontWeight: 'bold' }}>CONSIGLI SULLA COMPRAVENDITA DI FARMACIE</h1>
                
                <h1 className="mb-2 text-primary-emphasis text-start">
                  Vuoi comprare una farmacia?</h1>
              <div className='my-div'>
                <p className="mb-1 mb-3 text-start">
                  Vuoi comprare una farmacia, ma non sai da che parte iniziare, d’altra parte non l’hai mai fatto ed è una cosa seria e complicata.
                </p>
                <p className="mb-1 mb-3 text-start">
                  Di solito, dopo il primo contatto …
                </p>
                <p className="card-text mb-auto">
                  <button type="button" className="btn btn-md px-4 me-md-2 mb-4"
                    style={{ backgroundColor: '#5471ab', color: '#ffffff' }}
                  >
                    <Link className='btn-href' href="/compravendita-farmacie">Leggi l'articolo</Link>
                  </button>
                </p>

                <h1 className="mb-2 text-primary-emphasis text-start">
                  Oppure vuoi mettere la tua farmacia in vendita?</h1>
                <div className='my-div'>
                  <p className="mb-1  mb-3 text-start">
                    Vuoi mettere la tua farmacia in vendita, ti sei deciso o …a dire il vero no, ma ci stai seriamente pensando.
                  </p>
                  <p className="mb-1 mb-3 text-start">
                    Di certo ti servono …
                  </p>
                  <p className="card-text mb-auto">
                    <button type="button" className="btn btn-md px-4 me-md-2"
                      style={{ backgroundColor: '#5471ab', color: '#ffffff' }}
                    >
                      <Link className='btn-href' href="/compravendita-farmacie">Leggi l'articolo</Link></button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default ConsigliRg2;





