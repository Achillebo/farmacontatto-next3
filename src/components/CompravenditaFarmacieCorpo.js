"use client";

import Image from "next/image";
import voglio_comprare_una_farmacia from './immagini/voglio-comprare-una-farmacia.png';
import voglio_vendere_la_farmacia from './immagini/voglio-vendere-la-farmacia.png';

import CompravenditaFarmacieSb from '@/components/CompravenditaFarmacieSb';
import ContattiLink from '@/components/ContattiLink';
import ContattiBottone from '@/components/ContattiBottone';

export const CompravenditaFarmacieCorpo = () => {

  return (
    <>

        <div className="row g-2">
          <div className="col-lg-9 col-md-8">

            <article className="blog-post p-3"
              style={{ backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)" }}>
              
              <p className="blog-post-meta"> Marzo, 2025 di Achille Bonzini
              </p>
              
              <div className="row flex-md-row p-">
                <div className="col-md-6 col-sm-12-pt-5 order-sm-2 my-auto" id='Comprare una farmacia'>
                  <Image src={voglio_comprare_una_farmacia} className="d-block mx-lg-auto img-fluid" alt="Comprare una farmacia" title="Comprare una farmacia" width="720" loading="lazy" />
                </div>

                <div className="col-md-6 col-lg-6 col-sm-12-pt-5 order-sm-1" id='Comprare farmacie'>
                  <p style={{ color: '#f57e20', fontWeight: 'bold' }}>COMPRARE FARMACIE</p>
                  <div style={{ textAlign: 'left' }}>
                    <h3>Comprare una farmacia</h3>
                    <p className="my-citazione" id='Il supporto giusto'>
                      Comprare una farmacia: il supporto giusto per un investimento sicuro
                    </p>
                    <div style={{ textAlign: 'justify' }}>
                      <p>
                        Se stai cercando informazioni sulla <b>compravendita di farmacie</b>, sei nel posto giusto. Acquistare o vendere una
                        farmacia è un'operazione complessa che richiede competenze specifiche e il supporto di professionisti esperti.
                        <br></br>
                        <b>Farmacontatto</b> offre tutti i servizi necessari per gestire con successo la compravendita della tua farmacia.
                        <br></br>
                        Dopo un primo contatto, organizzeremo un incontro conoscitivo nella massima riservatezza per comprendere le tue
                        necessità.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12- pt-1 order-3">
                  <div style={{ textAlign: 'left' }} id='Parleremo delle tue aspettative'>
                    <p className="my-citazione" id='Le tue aspettative'>
                      Parleremo delle tue aspettative
                    </p>
                    <div style={{ textAlign: 'justify' }}>
                      <p>
                        Parleremo delle tue aspettative lavorative ed economiche, delle tue necessità personali, familiari e logistiche.
                        <br></br>
                        Questo è molto importante per noi per poter trovare la farmacia più adatta a te, nella zona che ti interessa,
                        in linea con il tuo budget d’investimento e con la percentuale da finanziare.
                        <br></br>
                        Farmacontatto fornisce informazioni sulle farmacie in vendita esclusivamente a seguito di incontri conoscitivi e
                        nella massima riservatezza, garantendo nelle prime fasi della trattativa l’anonimato di entrambe le parti.
                      </p>
                      <p className="my-citazione" id='Cosa considerare'>
                        Compravendita di farmacie: cosa considerare
                      </p>
                      <span>
                        Quando si tratta di acquistare una farmacia, è fondamentale valutare attentamente diversi aspetti, tra cui:
                        <ul>
                          <li>
                            La posizione ideale della farmacia
                          </li>
                          <li>
                            Il budget disponibile e la percentuale di finanziamento necessaria
                          </li>
                          <li>
                            Le opportunità di mercato più vantaggiose
                          </li>
                        </ul>
                      </span>
                      <p>
                        Forniamo informazioni sulle farmacie in vendita esclusivamente dopo incontri conoscitivi, garantendo la massima
                        discrezione e tutelando l'anonimato di entrambe le parti nelle fasi iniziali della trattativa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row flex-md-row p-4">
                <div className="col-md-6 col-sm-12-pt-5 order-sm-2 my-auto" id='Comprare una farmacia'>
                  <Image src={voglio_vendere_la_farmacia} className="d-block mx-lg-auto img-fluid" alt="Vendere una farmacia" title="Vendere una farmacia" width="720" loading="lazy" />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12-pt-5 order-sm-1" id='Vendere farmacie'>
                  <p style={{ color: '#f57e20', fontWeight: 'bold' }}>VENDERE FARMACIE</p>
                  <div style={{ textAlign: 'left' }} id='Vuoi mettere la tua farmacia in vendita?'>
                    <h3>Vuoi mettere la tua farmacia in vendita?</h3>
                    <div style={{ textAlign: 'justify' }}>
                      <p className="my-citazione" id='Affidati a esperti'>
                        Vendere una farmacia: affidati a esperti del settore
                      </p>
                      <p>
                        Se invece vuoi mettere la tua farmacia in vendita, ma hai ancora dubbi o incertezze, possiamo offrirti una
                        consulenza personalizzata per garantire il miglior prezzo di mercato.
                        <br></br>
                        Stai pensando di vendere la tua farmacia? Non sei ancora deciso?
                        <br></br>
                        Ti offriamo la consulenza di professionisti seri che conoscono molto bene il mercato delle farmacie, in grado di
                        fare una valutazione della tua farmacia per poterla proporre sul mercato al prezzo giusto.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12- pt-4 order-3">
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ textAlign: 'justify' }}>
                      <p className="my-citazione" id='Perché affidarsi a professionisti'>
                        Perché affidarsi a professionisti per la compravendita di farmacie
                      </p>
                      <span>
                        Farmacontatto ti aiuterà a:
                        <ul>
                          <li>
                            Effettuare una **valutazione accurata** della farmacia
                          </li>
                          <li>
                            Comprendere il **carico fiscale** e il guadagno netto effettivo
                          </li>
                          <li>
                            Determinare la formula di vendita più conveniente (cessione ditta individuale o quote societarie)
                          </li>
                        </ul>
                        Farmacontatto garantisce riservatezza assoluta e un'assistenza completa durante tutto il processo di vendita,
                        assicurando che la tua farmacia venga proposta al giusto valore di mercato.
                      </span>
                      <p>
                        Ti aiuteremo a capire quanto sarà effettivamente il carico fiscale a cui andrai incontro e il guadagno netto della vendita al saldo delle spese e delle imposte.
                        L’imposizione fiscale, infatti, potrebbe notevolmente variare anche a seconda che si tratti della cessione di una ditta individuale o cessione di quote, in caso di società.
                      </p>
                      <p>
                        Farmacontatto fornisce informazioni sulle farmacie in vendita esclusivamente a seguito di incontri conoscitivi e nella massima riservatezza, garantendo nelle prime fasi della trattativa l’anonimato di entrambe le parti in causa.
                      </p>


                      <p className="my-citazione" id='Farmacontatto: il partner ideale'>
                        Farmacontatto: il partner ideale per la compravendita di farmacie
                      </p>
                      <p>
                        Se sei interessato ad una <b>compravendita di farmacie</b>, contattaci oggi stesso per una consulenza riservata. Il tuo futuro professionale merita il miglior supporto!
                      </p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-12 pt-4 d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)",
                    minHeight: "250px",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="d-flex flex-column align-items-center"
                    id="Noi compriamo la tua farmacia"
                  >
                    <h2 className="d-inline-block mb-2 text-primary-emphasis">
                      E TU?
                    </h2>

                    <h3 className="mb-3 text-primary-emphasis">
                      Vorresti comprare una farmacia o ne hai una da vendere?
                      <br />
                      Contattami per ulteriori chiarimenti.
                    </h3>

                    <div className="card-text mb-auto">
                      <ContattiBottone etichetta="Scrivimi in privato" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-lg-3 col-md-4">
            <CompravenditaFarmacieSb />
          </div>
        </div>


    </>
  )
}
export default CompravenditaFarmacieCorpo;