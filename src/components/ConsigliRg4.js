import Image from "next/image";
import Consigli_vendere_una_farmacia from './immagini/consigli-vendere-una-farmacia.png';
import Link from "next/link";

export const ConsigliRg4 = () => {
  return (
    <>
      <div className="row">
        <div className="my-container p-4">

          <div className="row pb-0 p-5 align-items-center"
            style={{ backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)" }}
          >
            <div className="col-md-6 col-lg-6 order-sm-12 p-4" id='Vendere una farmacia'>
             <Link href="/vendere-la-farmacia">
                <Image src={Consigli_vendere_una_farmacia} className="d-block mx-lg-auto img-fluid" alt="Come vendere una farmacia" title="Come vendere una farmacia" width="720" loading="lazy" />
             </Link>
            </div>
            <div className="col-md-6 col-lg-6 order-sm-1">
              <h1 className="mb-2 text-primary-emphasis text-start"
                style={{ color: '#f57e20', fontWeight: 'bold' }}>COME DECIDERE DI VENDERE LA FARMACIA</h1>
                <h1 className="mb-2 text-primary-emphasis text-start">
                Noi ti aiutiamo vendere la farmacia</h1>
              <div className='my-div'>
                <p className="mb-1 mb-3 text-start">
                  Forse non hai ancora deciso, non sai che cosa fare o cosa sia meglio per te.
                </p>
                <p className="mb-1 mb-3 text-start">
                  Cosa conviene fare in questo momento?
                </p>
                <p className="mb-1 mb-3 text-start">
                  Sei un titolare che…
                </p>
                <p className="card-text mb-auto">
                  <button type="button" className="btn btn-md px-4 me-md-2 mb-4"
                    style={{ backgroundColor: '#fccd72', color: '#ffffff' }}>
                    <Link className='btn-href' href="/vendere-la-farmacia">Leggi l'articolo</Link>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConsigliRg4;





