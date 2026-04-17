import Image from "next/image";
import consigli_comprare_una_farmacia from './immagini/consigli-comprare-una-farmacia.png';
import Link from "next/link";

export const ConsigliRg3 = () => {
  return (
    <>
      <div className="row">
        <div className="my-container p-4">

          <div className="row pb-0 p-5 align-items-center"
            style={{ backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)" }}
          >
            <div className="row flex-sm-column-reverse flex-md-row">
              <div className="col-md-6 col-sm-6-pt-5 order-sm-2 my-auto" id='Comprare una farmacia'>
               <Link href="/comprare-una-farmacia">
                  <Image src={consigli_comprare_una_farmacia}
                    className="d-block img-fluid" alt="Comprare una farmacia" title="Comprare una farmacia" width="720" loading="lazy" />
               </Link>
              </div>
              <div className="col-md-6 order-sm-1 my-auto">
                <h1 className="text-primary-emphasis text-start pt-4"
                  style={{ color: '#f57e20', fontWeight: 'bold' }}>COME COMPRARE UNA FARMACIA</h1>
                  <h1 className="mb-2 text-primary-emphasis text-start">
                  Ti racconto una storia vera</h1>
                <div className='my-div'>
                  <p className="mb-1 mb-3 text-start">
                    Forse ti stai chiedendo perché dovresti scegliere proprio noi per comprare una farmacia.
                  </p>
                  <p className="mb-1 mb-3 text-start">
                    Ecco una storia vera e come è andata …
                  </p>
                  <p className="card-text mb-auto">
                    <button type="button" className="btn btn-md px-4 me-md-2"
                      style={{ backgroundColor: '#8dc761', color: '#ffffff' }}
                    >
                      <Link className='btn-href' href="/comprare-una-farmacia">Leggi l'articolo</Link>
                    </button>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConsigliRg3;





