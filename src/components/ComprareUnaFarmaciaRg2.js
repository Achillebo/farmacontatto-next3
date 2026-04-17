import Image from "next/image";

import user_friends_solid from "@/icone/user-friends-solid.svg";
import newspaper_solid from "@/icone/newspaper-solid.svg";
import handshake_solid from "@/icone/handshake-solid.svg";
import chart_pie_solid from "@/icone/chart-pie-solid.svg";
import cubes_solid from "@/icone/cubes-solid.svg";
import user_tie_solid from "@/icone/user-tie-solid.svg";

export const ComprareUnaFarmaciaRg2 = () => {
  return (
    <div className="my-div p-5">

      {/* GRID */}
      <div
        className="row g-4 pt-3 mb-5"
        style={{
          backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)",
        }}
      >

        {/* ITEM 1 */}
        <div className="col-lg-4 text-center">
          <Image src={user_friends_solid} alt="" width={50} height={50} />
          <h3>Tuteliamo entrambe le parti</h3>
          <p>
            Tuteliamo entrambe le parti garantendo imparzialità ed equilibrio perché sappiamo che gli affari si fanno in due.
          </p>
        </div>

        {/* ITEM 2 */}
        <div className="col-lg-4 text-center">
          <Image src={newspaper_solid} alt="" width={50} height={50} />
          <h3>Contratti chiari e semplici</h3>
          <p>
            Abbiamo voglia di semplicità e concretezza. Ci piacciono i contratti scritti in "italiano" e siamo allergici a frasi in “avvocatese”.
          </p>
        </div>

        {/* ITEM 3 */}
        <div className="col-lg-4 text-center">
          <Image src={handshake_solid} alt="" width={50} height={50} />
          <h3>Accompagniamo sempre</h3>
          <p>
            Non mandiamo mai i clienti da soli, leggiamo i bilanci con loro e facciamo calcoli, selezioniamo finanziarie e molto altro.
          </p>
        </div>

        {/* ITEM 4 */}
        <div className="col-lg-4 text-center">
          <Image src={chart_pie_solid} alt="" width={50} height={50} />
          <h3>
            Servizi a 360° <br /> Cosa vuol dire?
          </h3>
          <p>
            Non lo sappiamo, forse... giudicate voi. Si fa quello che serve e che va fatto.
          </p>
        </div>

        {/* ITEM 5 */}
        <div className="col-lg-4 text-center">
          <Image src={cubes_solid} alt="" width={50} height={50} />
          <h3>
            Leader di mercato? <br /> No grazie!
          </h3>
          <p>
            Ci limitiamo alle trattative che possiamo seguire bene. Alla fine i clienti sono contenti ed è quello che conta.
          </p>
        </div>

        {/* ITEM 6 */}
        <div className="col-lg-4 text-center">
          <Image src={user_tie_solid} alt="" width={50} height={50} />
          <h3>
            Professionali? <br /> Forse!
          </h3>
          <p>
            Non possiamo dirlo noi. Meglio incontrarsi e giudicare di persona.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ComprareUnaFarmaciaRg2;