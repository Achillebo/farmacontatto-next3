import ContattiBottone from './ContattiBottone';

export const HomeRg4 = () => {
  return (

<>
  <div className="row justify-content-center">
    <div
      className="col-12 p-4 text-center"
      style={{ backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)" }}
    >
      <div className="row g-0 justify-content-center">
        <div
          className="col-12 col-md-8 p-4 d-flex flex-column align-items-center"
          id="Noi compriamo la tua farmacia"
        >
          <h4 style={{ color: '#f57e20', fontWeight: 'bold' }}>
            INOLTRE
          </h4>

          <h2 className="mb-3 text-primary-emphasis">
            NOI COMPRIAMO FARMACIE<br />
            per nostri selezionatissimi clienti
          </h2>

          <div className="mb-4">
            Se vuoi vendere una farmacia, se vuoi comprare una farmacia,
            se vuoi una valutazione della tua farmacia,
            <br />
            contattaci per richiedere informazioni nella massima riservatezza
          </div>

          <div>
            <ContattiBottone etichetta="Contattami riservatamente" />
          </div>

        </div>
      </div>
    </div>
  </div>
</>
  )
}
export default HomeRg4;





