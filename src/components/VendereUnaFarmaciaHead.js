
import Image from "next/image";
import Vendere_una_farmacia from '@/components/immagini/vendere-una-farmacia-quadrato.png';
import ContattiBottone from '@/components/ContattiBottone';

export const VendereUnaFarmaciaHead = () => {
  return (
    <>

      <div className="px-5 text-center border-bottom" id='Compravendita di farmacie' style={{ backgroundColor: "#fecf74" }}>
        <div className="mycontainer">
          <div className="row flex-lg-row-reverse align-items-center">
            <div className="pt-5 col-sm-12 col-lg-8">
              <Image src={Vendere_una_farmacia} className="mx-lg-auto img-fluid" alt="Vendere una farmacia" title="Vendere una farmacia" width="700" loading="lazy" />
            </div>
            <div className="col-lg-4 mb-3"
              style={{
                borderRadius: '20px',
                backgroundColor: '#f7f9fc',
                padding: '20px'
              }}>
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3"
                style={{
                  textShadow: '-3px 3px 6px #A39090',
                  fontSize: '3.5vw',
                  WebkitTextStrokeWidth: '1px',
                  WebkitTextStrokeColor: '#54595f'
                }}>
                <font color="#5672AD">Vendere la farmacia</font></h1>
              <p className="lead fw-bold"
                style={{
                  textShadow: '-1px 1px 2px #A39090',
                  fontSize: '1.4vw',
                }}>
                <font color="#5672AD">
                Stai pensando di vendere la farmacia?
                </font>
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <ContattiBottone etichetta='Contattaci' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default VendereUnaFarmaciaHead;