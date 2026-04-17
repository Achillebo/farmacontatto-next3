"use client";

import { Breadcrumb } from "react-bootstrap";
import Link from "next/link";
// import { Link as Links } from 'react-scroll';
import Image from "next/image";
import { ComprareUnaFarmaciaSb } from './ComprareUnaFarmaciaSb';
import ContattiLink from './ContattiLink';
import ContattiBottone from './ContattiBottone';

import user_friends_solid from "@/icone/user-friends-solid.svg";
import newspaper_solid from "@/icone/newspaper-solid.svg";
import handshake_solid from "@/icone/handshake-solid.svg";
import chart_pie_solid from "@/icone/chart-pie-solid.svg";
import cubes_solid from "@/icone/cubes-solid.svg";
import user_tie_solid from "@/icone/user-tie-solid.svg";

export const ComprareUnaFarmaciaCorpo = () => {

  return (

    <>
      <div className="row g-2">
        <div className="col-md-9">

          <article className="blog-post"
            style={{ backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)" }}>
            <p className="blog-post-meta"> Marzo, 2025 di Achille Bonzini
            </p>
            <div className="row flex-md-row">

              <div className="col-12" id='Come comprare una farmacia'>
                <p style={{ color: '#f57e20', fontWeight: 'bold' }}>COMPRARE UNA FARMACIA</p>
                <div style={{ textAlign: 'left' }} id='Una storia vera'>
                  <h3>Come comprare una farmacia: la storia di Marco e il percorso verso il successo</h3>
                  <p className="my-citazione">
                    “L’ovvio é quello che non si vede mai, finché qualcuno non lo esprime con la massima semplicità.”<br></br> Kahlil Gibran
                  </p>
                  <p>
                    Acquistare una farmacia non è un processo semplice. Se hai mai cercato annunci online o sui giornali, avrai notato che mentre ci sono migliaia di
                    inserzioni per appartamenti e immobili, trovare un'inserzione per comprare una farmacia è un'impresa rara.
                    Ti sei mai chiesto il motivo?
                  </p>
                  <p>
                    Marco era il direttore di una farmacia comunale da diversi anni. Gestiva l'attività con passione e dedizione,
                    pur sapendo che il suo stipendio non sarebbe mai stato sufficiente per realizzare il sogno di acquistare una farmacia
                    tutta sua. Per molto tempo ha sperato che il Comune mettesse in vendita la farmacia che dirigeva, Lui,
                    essendo il direttore, aveva la prelazione e con l’aiuto dei suoi aveva messo da parte qualche soldo ben sapendo
                    che non sarebbe bastato e che ci sarebbe voluta anche un finanziamento, ma l'attesa si faceva sempre più lunga.
                  </p>
                  <p>
                    Determinato a trovare una soluzione, Marco ha iniziato a chiedere aiuto a rappresentanti di settore e a un noto
                    commercialista specializato nella contabilità di farmacie. Tuttavia, le promesse ricevute si sono rivelate vane e
                    la famosa chiamata con un'opportunità concreta non arrivava mai.
                  </p>
                  <p className="my-citazione" id='Come Marco ha comprato la sua farmacia'>
                    La svolta: come Marco ha comprato la sua farmacia
                  </p>
                  <p>
                    Dopo molte difficoltà, Marco è finalmente riuscito a realizzare il suo sogno. Ha acquistato una farmacia, siamo
                    diventati amici e tutto è filato liscio. A distanza di due anni ha fatto ristrutturare la sua farmacia - che ne
                    aveva proprio bisogno - e orgoglioso qualche giorno fa mi chiama per farmela vedere.
                  </p>
                  <p>
                    “Sai” mi ha detto, “giorni fa è venuto a trovarmi Luca, il precedente proprietario, per farmi gli auguri di Natale
                    e mi ha detto di salutarti. E’ stato molto contento di vedere come ho sistemato la sua vecchia farmacia e,
                    ancor di più, nel vedere che ho valorizzato quel bel mobile antico che mi ha lasciato e al quale teneva tanto perché
                    era di suo nonno.
                    Non ha rimpianti, è in pensione e si gode i nipotini", poi, prosegue, “mi capita a volte di passare davanti
                    alla vecchia comunale, é rimasto tutto come prima …o quasi, e non l’hanno ancora venduta".
                    "Il nuovo direttore della farmacia Comunale è uno ragazzo giovane ed è pure simpatico, ma, il sentore e
                    gli odori in quella vecchia farmacia, me li ricordo bene, ora sono, come dire …diversi, o almeno così
                    mi sembra. Chissà, forse sarà che sono cambiato io”.
                  </p>
                  <p className="my-citazione" id='Comprare una farmacia con successo'>
                    Come comprare una farmacia: il segreto del successo
                  </p>
                  <p>
                    Comprare una farmacia è impresa delicata e complessa, venderla lo è forse ancora di più. Io, per lavoro, vendo e faccio comprare
                    farmacie tutti i giorni, nella massima riservatezza, e se chiedi a Marco, o a Luca, probabilmente ti diranno che è stato facile….
                  </p>
                  <p>
                    Perché …vedi, a monte c’è un lavoro quasi maniacale per far diventare semplice quello che è complesso
                    e che altri, al contrario, preferiscono complicare ulteriormente spesso solo per darsi importanza.
                    Noi, per fare un’esempio, ci sforziamo di scrivere i contratti in linguaggio semplice e in un italiano
                    chiaro, al limite dell’ovvio, perché “L’ovvio è quello che non si vede mai, finché qualcuno non lo
                    esprime con la massima semplicità.” Kahlil Gibran.
                  </p>
                  <p><b>
                    Achille Bonzini
                  </b>
                  </p>
                </div>
              </div>

              <div className="row">
                <div
                  className="col-12 d-flex align-items-center justify-content-center text-center"
                  style={{ backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)", minHeight: "300px" }}
                >
                  <div className="row g-0 overflow-hidden flex-md-row w-100 justify-content-center">
                    <div
                      className="col-md-8 d-flex flex-column align-items-center"
                      id="Noi compriamo la tua farmacia"
                    >
                      <h2 className="d-inline-block mb-2 text-primary-emphasis">
                        E TU, COSA PENSI DI FARE?
                      </h2>

                      <h3 className="mb-3 text-primary-emphasis">
                        Vorresti comprare una farmacia o ne hai una da vendere?
                        <br />
                        Perché dovresti scegliere noi e non altri?
                      </h3>

                      <p className="mb-auto">
                        <ContattiBottone etichetta="Contattami" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

    <div>

      {/* GRID */}
      <div
        className="row g-4"
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

        </div>
        < ComprareUnaFarmaciaSb />
      </div>


    </>
  )
}
export default ComprareUnaFarmaciaCorpo;