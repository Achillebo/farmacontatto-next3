import Image from "next/image";
import Agenzia_Farmacie from './immagini/agenzia-farmacie.png';
import ChkOk from './immagini/check.png';

export const ChisiamoRg3 = () => {
  return (
    <>
      <div className="row">
        <div className="container p-4">

          <div className="row pb-0 p-5 align-items-center"
            style={{ backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)" }}
          >
            <div className="row flex-sm-column-reverse flex-md-row">
              <div className="col-md-6 order-sm-2" id='Vendere la tua farmacia'>
                <Image src={Agenzia_Farmacie} className="d-block mx-lg-auto img-fluid" alt="Agenzia intermediazione Farmacie" width="650" loading="lazy" />
              </div>
              <div className="col-md-6 order-sm-1">
                <h1 className="mb-2 text-primary-emphasis text-start pt-4">
                  <p style={{ color: '#f57e20', fontWeight: 'bold', fontSize: '0.6em' }}>COME LA PENSIAMO</p>{' '}
                  Collaboriamo con altre agenzie</h1>
                <div style={{ fontSize: '1.1em' }}>
                <div className='my-div'>
                  <p className="mb-1 mb-3 text-start">
                    Sappiamo bene che quello delle farmacie è un mercato esclusivo e particolare.
                  </p>
                  <p className="mb-1 mb-3 text-start">
                    Siamo contenti di collaborare con agenzie e seri  intermediari specializati in farmacie e nella loro compravendita.
                  </p>
                  <p className="mb-1 mb-3 text-start">
                    Troverai inserzioni delle agenzie che collaborano con noi sul portale Pharmascout.it, il tutto per fornire maggiori possibilità  a chi vuole comprare o mettere una farmacia in vendita.
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

export default ChisiamoRg3;





