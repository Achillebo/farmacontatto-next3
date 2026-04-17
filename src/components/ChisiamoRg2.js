import Image from "next/image";
import Intermediari_farmacie from './immagini/intermediari-farmacie.png';

export const ChisiamoRg2 = () => {
  return (
    <>
      <div className="row">
        <div className="container">

          <div className="row pb-0 p-5 align-items-center"
            style={{ backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)" }}
          >
            <div className="col-md-6 col-lg-6 order-sm-12" id='Comprare una farmacia'>
              <Image src={Intermediari_farmacie} className="d-block mx-lg-auto img-fluid" alt="Intermediari Farmacie" width="720" loading="lazy" />
            </div>
            <div className="col-md-6 col-lg-6 order-sm-1">
              <h1 className="mb-2 text-primary-emphasis text-start pt-4">
                <p style={{ color: '#f57e20', fontWeight: 'bold', fontSize: '0.6em' }}>COSA OFFRIAMO</p>{' '}
                Siamo intermediari specializati in farmacie.</h1>
              <div className='my-div'>
                <p className="mb-1 mb-3 text-start">
                  Dopo trentennale esperienza nel settore delle farmacie, siamo oggi un’agenzia d’intermediazione che si occupa esclusivamente di compravendita di farmacie.
                </p>
                <p className="mb-1 mb-3 text-start">
                  Offriamo ricerca farmacie, analisi dei dati e dei bilanci, valutazioni e perizie, finanziamenti, stesura contratti e molto altro.
                </p>
                <p className="mb-1 mb-3 text-start">
                  Ci occupiamo di tutto ciò che serve per portare a termine, con riservatezza e sicurezza, l’operazione di compravendita.
                </p>
                <p className="mb-1 mb-3 text-start">
                  Affianchiamo e supportiamo il cliente in tutte le fasi dell’operazione di compravendita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChisiamoRg2;





