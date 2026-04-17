import Image from "next/image";
import Comprare_una_farmacia from '@/components/immagini/comprare-una-farmacia-quadrato.jpg';
import ContattiBottone from '@/components/ContattiBottone';

export const ComprareUnaFarmaciaHead = () => {
  return (
    <>

      <div className="px-5 text-center border-bottom" id='Compravendita di farmacie' style={{ backgroundColor: "#8fc963" }}>
        <div className="mycontainer">
          <div className="row flex-lg-row-reverse align-items-center pt-5 ">
            <div className="pt-5 col-sm-12 col-lg-8">
              <Image src={Comprare_una_farmacia} className="mx-lg-auto img-fluid" alt="Comprare una farmacia" title="Comprare una farmacia" width="700" loading="lazy" />
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
                <font color="#5672AD">Comprare<br></br>una farmacia</font></h1>
              <p className="lead fw-bold"
                style={{
                  textShadow: '-1px 1px 2px #A39090',
                  fontSize: '1.4vw',
                }}>
                <font color="#5672AD">
                Vorresti comprare o vendere una farmacia
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

export default ComprareUnaFarmaciaHead;