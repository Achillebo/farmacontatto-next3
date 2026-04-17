import Image from "next/image";
import Farmacontatto_chi_siamo from './immagini/farmacontatto-chi-siamo.jpg';
import ContattiBottone from './ContattiBottone';

export const ChisiamoHead = () => {
  return (
    <div
      className="px-5 text-center border-bottom"
      id="Compravendita di farmacie"
      style={{ backgroundColor: "#d9eef3" }}
    >
      <div className="mycontainer col-xxl-12">
        <div className="row flex-lg-row-reverse align-items-center">
          
          <div className="col pt-5 col-sm-12 col-lg-6">
            <Image
              src={Farmacontatto_chi_siamo}
              alt="Chi siamo Farmacontatto"
              width={700}
              height={500}
              className="d-block mx-lg-auto img-fluid"
            />
          </div>

          <div
            className="col-lg-6 mb-3"
            style={{
              borderRadius: '20px',
              backgroundColor: '#f7f9fc',
              padding: '20px'
            }}
          >
            <h1
              className="display-5 fw-bold text-body-emphasis lh-1 mb-3"
              style={{
                textShadow: '-3px 3px 6px #A39090',
                fontSize: '3.5em',
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#54595f'
              }}
            >
              <span style={{ color: "#5672AD" }}>
                Chi siamo e cosa offriamo
              </span>
            </h1>

            <p
              className="lead fw-bold"
              style={{
                textShadow: '-1px 1px 2px #A39090',
                fontSize: '1.4em',
              }}
            >
              <span style={{ color: "#5672AD" }}>
                ecco qualche informazione e per sapere di più
              </span>
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <ContattiBottone etichetta="Contattaci" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChisiamoHead;