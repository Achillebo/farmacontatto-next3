"use client";

import Image from "next/image";
import Link from "next/link";

import Il_momento_di_vendere_la_farmacia from '@/components/immagini/il-momento-di-vendere-la-farmacia.png';
import Farmacia_venduta from '@/components/immagini/farmacia-venduta.png';

import { VendereUnaFarmaciaSb } from '@/components/VendereUnaFarmaciaSb';
import ContattiLink from '@/components/ContattiLink';
import ContattiBottone from '@/components/ContattiBottone';
import { HomeRg4 } from '@/components/HomeRg4';

import user_friends_solid from '@/icone/user-friends-solid.svg';
import newspaper_solid from '@/icone/newspaper-solid.svg';
import handshake_solid from '@/icone/handshake-solid.svg';
import sellsy from '@/icone/sellsy.svg';
import user_secret_solid from '@/icone/user-secret-solid.svg';
import money_bill_1_regular from '@/icone/money-bill-1-regular.svg';



export const VendereUnaFarmaciaCorpo = () => {

  return (
    <div className="row g-2">
      <div className="col-md-9">

        <article className="blog-post pt-3 p-3"
          style={{ backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)" }}>

          <p className="blog-post-meta">
            Marzo, 2025 di Achille Bonzini
          </p>

          <div className="row flex-md-row p-3">
            <div className="col-md-6 col-lg-4 order-sm-2">
              <Image
                src={Il_momento_di_vendere_la_farmacia}
                className="d-block mx-lg-auto img-fluid"
                alt="E' momento di vendere la farmacia?"
                title="E' momento di vendere la farmacia?"
                width={650}
              />
            </div>

            <div className="col-md-6 col-lg-8 order-sm-1 p-4">

              <p style={{ color: '#f57e20', fontWeight: 'bold' }}>
                COME VENDERE LA FARMACIA
              </p>

              <div>
                <h3>Noi ti aiutiamo vendere la farmacia</h3>

                <p className="my-citazione">
                  Vendere la farmacia: come farlo nel modo giusto
                </p>

                <p>
                  Se stai valutando di vendere la farmacia, ma non sai ancora se sia il momento giusto o quale sia la strategia migliore, siamo qui per aiutarti.
                </p>

                <p>
                  La vendita di una farmacia è un'operazione complessa che richiede attenzione, competenza e il supporto di professionisti esperti del settore.
                </p>

                <p className="my-citazione">
                  Quando è il momento giusto per vendere la farmacia?
                </p>

                <p>
                  Se sei vicino alla pensione o senti di non avere più lo stesso entusiasmo nella gestione della tua attività, potrebbe essere il momento di valutare la vendita.
                </p>

                <p>
                  Personalmente credo che non convenga “tirare a campare” ancora un po’, come sento spesso dire, rimandando la decisione.
                  Continuare a gestire la farmacia con meno impegno potrebbe influire negativamente sul valore dell’attività.
                </p>

                <p>
                  Noi di Farmacontatto possiamo aiutarti a vendere la tua farmacia alle migliori condizioni, garantendo la massima riservatezza durante tutto il processo.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 order-md-3 p-4">
              <Image
                src={Farmacia_venduta}
                className="d-block mx-lg-auto img-fluid"
                alt="Ho venduto la farmacia"
                title="Ho venduto la farmacia"
                width={720}
              />
            </div>

            {/* FIX BLOCCO */}
            <div className="col-md-6 col-lg-8 order-sm-3 px-4">

              <div className="mb-3 text-start">
                <span className="my-citazione">
                  Perché affidarsi a professionisti per vendere la farmacia?
                </span>

                <p>Affidarsi a esperti del settore significa ottenere:</p>

                <ul>
                  <li>- Una <b>valutazione accurata</b> della farmacia per stabilire il giusto prezzo di mercato</li>
                  <li>- Analisi del <b>carico fiscale</b> e del guadagno netto effettivo</li>
                  <li>- Una <b>Selezione mirata</b> dei potenziali acquirenti, tutelando la tua privacy</li>
                </ul>
              </div>

              <p className="mb-3 text-start">
                Questo è un buon momento per vendere e ti consiglio di leggere l’articolo su Pharmascout{" "}
                <Link className='my-link'
                  href='https://pharmascout.it/comprare-o-vendere-la-farmacia/'
                  target='_blank'
                  rel="noopener noreferrer">
                  “E’ il momento di comprare o vendere la farmacia?“
               </Link>
              </p>

              <p className="mb-3 text-start">
                Grazie al nostro portale{" "}
                <Link className='my-link'
                  href='https://pharmascout.it'
                  target='_blank'
                  rel="noopener noreferrer">
                  Pharmascout
               </Link>{" "}
                e alla collaborazione con agenzie specializate, riceviamo costantemente richieste di acquisto da tutta Italia, da farmacisti e investitori interessati al settore.
              </p>

            </div>
          </div>

          {/* SEZIONE RISERVATEZZA */}
          <div className="col-12 px-4">

            <span className="mb-3 text-start">
              <p className="my-citazione" id='La riservatezza è fondamentale'>
                La riservatezza è fondamentale
              </p>
              <p>
                Uno dei rischi principali nella <b>vendita di una farmacia</b> è la fuga di informazioni. Una diffusione prematura della
                notizia potrebbe creare incertezze tra i dipendenti, i fornitori e le banche, compromettendo la stabilità
                ed il valore della farmacia stessa.
              </p>
              <p>
                Per questo motivo, operiamo con la massima discrezione, abbiamo creato il nostro portale di inserzioni <a className='my-link' href='https://pharmascout.it' target='blanks'>Pharmascout</a> ed evitiamo strumenti poco adatti come i social network,
                dove la divulgazione non controllata di informazioni potrebbe danneggiare la tua attività.
              </p>
            </span>
            <span className="mb-3 text-start">
              <p className="my-citazione" id='Collaboriamo con diverse agenzie'>
                Collaboriamo con diverse agenzie (se serve)
              </p>
              <p>
                <b>Previo accordo con il venditore</b>, collaboriamo con diverse agenzie di intermediazione specializate in
                farmacie e distribuite su tutto il territorio nazionale.
                Con loro condividiamo incarichi di farmacie in vendita, informazioni sul mercato, metodi e regole
                interne, soprattutto quelle relative alla riservatezza.
              </p>
              <p className="my-citazione" id='Uno dei maggiori ostacoli'>
                Uno dei maggiori ostacoli
              </p>
              <p>
                Sembrerà forse strano a qualcuno, ma uno dei maggiori ostacoli al buon esito di una trattativa per una
                farmacia in vendita è la fuga di notizie che si verifica quando vengono coinvolte, nella gestione delle
                trattative, persone che non mantengono la necessaria riservatezza.
                Sono in genere persone che non si occupano specificatamente di vendita di farmacie e che non sanno come
                si opera in questo mercato o che, addirittura, non sono nemmeno mediatori abilitati.
              </p>
              <p className="my-citazione" id='Mediatori abilitati'>
                Mediatori abilitati
              </p>
              <p>
                Ricordiamo che il mediatore abilitato è <b>iscritto nella apposita sezione della Camera di Commercio</b> (lo puoi con trollare!) e
                che il suo è <b>un lavoro esclusivo</b>, cioè, non può fare nessun altro lavoro, non può essere un
                rappresentante, un avvocato, un commercialista, un direttore di banca ecc…
              </p>
              <p>
                Sappi inoltre che non ti conviene rendere pubbliche certe tue faccende personali ed ecco perché certi
                canali, e soprattutto i social network, non sono adatti a questo genere di cose.
                Intendiamoci …questi ultimi sono programmi di enorme diffusione e successo planetario e
                sono gratuiti, ma sono concepiti e realizzati per altri scopi.
                <br></br>
                Citando Jason Lanier, inventore della realtà virtuale, <b>"Quando il servizio è gratis, il prodotto sei tu"</b>.
              </p>
              <p>
                Inoltre, venendo a sapere o leggendo sui social che vuoi vendere la farmacia, i tuoi dipendenti,
                allarmati, inizierebbero a mandare curriculum in tutte le farmacie della zona. Le altre implicazioni
                con fornitori e banche sarebbero ancora più gravi e pesanti, se vuoi te le posso elencare di persona.
              </p>
              <p className="mb-3 text-start">
                Pensi che tutto ciò sia bene per te? Secondo noi no; ecco perché ti diamo la possibilità di gestire, con il nostro aiuto, la trattativa in forma sicura e anonima.
              </p>

              <p className="my-citazione" id='Farmacontatto: il supporto ideale'>
                Farmacontatto: il supporto ideale per vendere la farmacia
              </p>
              <p>
                Se vuoi <b>vendere la farmacia</b> in modo sicuro e vantaggioso, contattaci riservatamente.
                Ti guideremo in ogni fase della trattativa, garantendo la massima professionalità e riservatezza.
              </p>
            </span>

            <p>Scrivimi cosa ne pensi o per ricevere maggiori informazioni.</p>

            <p><b>Achille Bonzini</b></p>

          </div>

          {/* CTA */}
          <div className="row">
            <div
              className="col-12 pt-4 d-flex align-items-center justify-content-center text-center"
              style={{ backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)" }}
            >
              <div className="row g-0 w-100">
                <div
                  className="col d-flex flex-column align-items-center justify-content-center"
                  id="Noi compriamo la tua farmacia"
                >

                  <h2 className="mb-2 text-primary-emphasis">E TU?</h2>

                  <h3 className="mb-3 text-primary-emphasis">
                    Vorresti vendere la tua farmacia o ne vorresti comprare una?
                    <br />
                    Perché dovresti scegliere noi e non altri?
                  </h3>

                  <div className="card-text">
                    <ContattiBottone etichetta=" Scrivimi in privato" />
                  </div>

                </div>
              </div>
            </div>
          </div>

        </article>
        {/* FEATURES */}
        <div className="row pt-3 mb-1 p-4" style={{ backgroundImage: "linear-gradient(180deg, #F7F9FC, #FFFFFF)" }}>
          <div className="row">

            <div className="col-lg-4">
              <Image src={handshake_solid} alt="Siamo intermediari e ci occupiamo di farmacie" width="50" height="50" />
              <h3>Siamo intermediari e ci<br></br>
                occupiamo di farmacie</h3>
              <p>Siamo agenti intermediari abilitati, ci occupiamo solo di farmacie e lo facciamo tutti i giorni.</p>
            </div>

            <div className="col-lg-4">
              <Image src={user_friends_solid} alt="Farmacontatto- Collaboriamo con altre agenzie selezionate" width="50" height="50" />
              <h3>Collaboriamo con altre agenzie selezionate</h3>
              <p>Affidare a noi un incarico è come affidarsi a più agenti specializati che collaborano tra loro.</p>
            </div>

            <div className="col-lg-4">
              <Image src={newspaper_solid} alt="Pharmascout: il nostro portale multi-agenzia" width="50" height="50" />
              <h3>Pharmascout: il nostro portale multi-agenzia</h3>
              <p>Su pharmascout.it trovi le inserzioni di farmacie in vendita delle agenzie aderenti al gruppo.</p>
            </div>


          </div>
          <div className="row">
            <div className="col-lg-4">
              <Image src={sellsy} alt="Farmacontatto - Valutazioni gratuite e perizie" width="50" height="50" />
              <h3>Valutazioni e perizie</h3>
              <p>Se vuoi sapere quanto vale la tua farmacia, contattaci nella massima riservatezza.</p>
            </div>

            <div className="col-lg-4">
              <Image src={user_secret_solid} alt="Farmacontatto - Trattative nella massima riservatezza" width="50" height="50" />
              <h3>Massima riservatezza</h3>
              <p>La riservatezza è la prima regola che ci siamo dati; la rispettiamo e la facciamo rispettare sempre.</p>
            </div>

            <div className="col-lg-4">
              <Image src={money_bill_1_regular} alt="Farmacontatto - Richiesta finanziamenti" width="50" height="50" />
              <h3>Richiesta finanziamenti</h3>
              <p>Aiutare i compratori ad ottenere un finanziamento significa agevolare la vendita al meglio della tua farmacia.</p>
            </div>
          </div>
          <HomeRg4 />
        </div>
      </div>
      <VendereUnaFarmaciaSb />
    </div>
  );
};
export default VendereUnaFarmaciaCorpo;