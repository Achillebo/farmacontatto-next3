import "@/components/blog.css";
import Link from "next/link";
import Navbar2 from "@/components/Navbar1";

export const metadata = {
    robots: {
        index: false,
        follow: false,
    },
    title: "Condizioni d'Uso - Farmacontatto",
};

export default function Cookies() {
    return (
        <>
            <Navbar2 />

            <main style={{ marginTop: "100px", paddingBottom: "2rem" }}>
                <div
                    style={{
                        width: "80%",
                        margin: "80px auto 0",
                        paddingLeft: "1.5em",
                        paddingRight: "1.5em",
                        paddingTop: "2.5rem",
                        paddingBottom: "1.5rem",
                        border: "3px solid lightGray",
                    }}
                >
                    <h1>Informazioni generali sull&apos;uso dei cookies</h1>
                </div>

                <div
                    style={{
                        width: "80%",
                        margin: "0 auto",
                        paddingLeft: "1.5em",
                        paddingRight: "1.5em",
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                        border: "3px solid lightGray",
                        borderTop: "none",
                        textAlign: "justify",
                        lineHeight: "1.7",
                    }}
                >
                    <h2><strong>Cookie Policy di farmacontatto.it</strong></h2>
                    <p>
                        Si informa che su www.farmacontatto.it (&quot;Sito&quot;) utilizziamo cookie allo scopo di facilitare e migliorare la navigazione del sito web e migliorare la qualità della stessa. Il presente documento fornisce all&apos;utente (&quot;interessato al trattamento&quot;) informazioni dettagliate sull&apos;uso dei cookie (e tecnologie similari), su come sono utilizzati dal Sito e su come gestirli.
                    </p>

                    <h3><strong>Cosa sono i cookie</strong></h3>
                    <p>
                        I cookie sono stringhe di testo di piccole dimensioni che i siti visitati dall&apos;utente inviano al suo terminale (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente. Nel corso della navigazione, l&apos;utente può ricevere anche cookie che vengono inviati da siti o da web server diversi, così detti Cookie &quot;terze parti&quot;, sui quali possono risiedere alcuni elementi (quali, ad esempio, immagini, mappe, suoni, specifici link a pagine di altri domini) presenti sul Sito che lo stesso sta visitando.
                    </p>
                    <p>
                        I cookie, solitamente presenti nei browser degli utenti in numero molto elevato e a volte anche con caratteristiche di ampia persistenza temporale, sono usati per differenti finalità: esecuzione di autenticazioni informatiche, monitoraggio di sessioni, memorizzazione di informazioni su specifiche configurazioni riguardanti gli utenti che accedono al server, ecc.
                    </p>

                    <h4>I cookies possono essere suddivisi in:</h4>
                    <ul>
                        <li>cookie di navigazione o di sessione, che garantiscono la normale navigazione e fruizione del sito web (permettendo, ad esempio, di autenticarsi per accedere ad aree riservate);</li>
                        <li>cookie analytics, assimilati ai cookie tecnici laddove utilizzati direttamente dal gestore del sito per raccogliere informazioni, in forma aggregata, sul numero degli utenti e su come questi visitano il sito stesso;</li>
                        <li>cookie di funzionalità, che permettono all&apos;utente la navigazione in funzione di una serie di criteri selezionati (ad esempio, la lingua) al fine di migliorare il servizio reso allo stesso. I cookies (esclusi quelli tecnici) utilizzati attualmente sul Sito sono cookies per gestire la sessione utente.</li>
                    </ul>
                    <p>Quelli di terze parti sono di Google analytics.</p>
                    <p>
                        Quando l&apos;installazione di cookies avviene sulla base del consenso, tale consenso può essere revocato liberamente in ogni momento seguendo le istruzioni contenute in questo documento.
                    </p>

                    <h3><strong>Tipi di cookie utilizzati</strong></h3>
                    <p>Vengono di seguito indicate le tipologie di cookie utilizzate dal Sito:</p>

                    <h3><u>Cookie Tecnici</u></h3>
                    <p>
                        Questa tipologia di cookie permette il corretto funzionamento di alcune sezioni del Sito. Sono di due categorie, persistenti e di sessione:
                    </p>
                    <ul>
                        <li><strong>persistenti</strong>: una volta chiuso il browser non vengono distrutti ma rimangono fino ad una data di scadenza preimpostata;</li>
                        <li><strong>di sessione</strong>: vengono distrutti ogni volta che il browser viene chiuso.</li>
                    </ul>
                    <p>
                        Questi cookie, inviati sempre dal nostro dominio, sono necessari a visualizzare correttamente il Sito e in relazione ai servizi tecnici offerti, verranno quindi sempre utilizzati e inviati, a meno che l&apos;Utente non modifichi le impostazioni nel proprio browser (alterando la visualizzazione delle pagine del Sito).
                    </p>

                    <h4><u>Attività strettamente necessarie al funzionamento</u></h4>
                    <p>
                        Questo Sito utilizza cookie per salvare la sessione dell&apos;Utente e per svolgere altre attività strettamente necessarie al funzionamento dello stesso.
                    </p>

                    <h4><u>Attività di salvataggio delle preferenze, ottimizzazione e statistica</u></h4>
                    <p>
                        Questo Sito utilizza cookie per salvare le preferenze di navigazione ed ottimizzare l&apos;esperienza di navigazione dell&apos;Utente. Fra questi cookie rientrano, ad esempio, per la gestione di statistiche da parte del Titolare del sito.
                    </p>

                    <h3><strong>Tecnologie e cookie di terze parti</strong></h3>

                    <h4><u>Cookie analitici</u></h4>
                    <p>
                        I cookie di questa categoria vengono utilizzati per collezionare informazioni sull&apos;uso del Sito. Ci riserviamo la facoltà di usare queste informazioni per sviluppare analisi statistiche anonime e migliorare l&apos;utilizzo del Sito. Questa tipologia di cookie raccoglie dati in forma anonima sull&apos;attività dell&apos;utenza e su come è arrivata sul Sito. I cookie analitici sono inviati dal Sito stesso o da domini di terze parti. Possono rientrare nella categoria dei cookie tecnici laddove utilizzati direttamente dal gestore del sito per raccogliere informazioni in forma aggregata e in modo anonimo.
                    </p>
                    <p>
                        Un servizio di analisi del traffico web viene fornito da Google, Inc. (&quot;Google&quot;). Si tratta di cookie di terze parti raccolti e gestiti in modo anonimo per monitorare e migliorare le prestazioni del sito ospite (performance cookie). Google Analytics, in particolare, utilizza i &quot;cookie&quot; da questo Sito per raccogliere e analizzare in forma anonima le informazioni sui comportamenti di utilizzo dei siti.
                    </p>
                    <p>
                        Tali informazioni vengono raccolte da Google Analytics, che le elabora allo scopo di redigere report per gli operatori riguardanti le attività sui siti web stessi. Per ulteriori informazioni, si rinvia al link di seguito indicato:{" "}
                         <Link href="http://www.google.com/policies/privacy/">http://www.google.com/policies/privacy/ </Link>.
                    </p>

                    <p>
                        L&apos;utente può disabilitare in modo selettivo l&apos;azione di Google Analytics installando sul proprio browser la componente di opt-out fornito da Google. Per disabilitare l&apos;azione di Google Analytics, si rinvia al link di seguito indicato:{" "}
                         <Link href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout </Link>.
                    </p>
                    <p>
                        Questo Sito non utilizza (e non consente a terzi di utilizzare) lo strumento di analisi di Google per monitorare o per raccogliere informazioni personali di identificazione. In ogni caso, laddove utilizzato, avremo cura di adottare la funzione di anonimizzazione degli IP dell&apos;utente in Analytics, tramite la cd. &laquo;Mascheratura dell&apos;indirizzo IP&raquo; (in questo modo Google non assocerà l&apos;indirizzo IP a nessun altro dato posseduto, né cercherà di collegare un indirizzo IP con l&apos;identità di un utente).
                    </p>

                    <h4><u>Cookie di terze parti</u></h4>
                    <p>
                        Il nostro Sito utilizza anche cookie di terze parti per fruire delle interazioni con i social network (social plug-in). La presenza di questi plugin comporta la trasmissione di cookie da e verso tutti i siti gestiti da terze parti. La gestione delle informazioni raccolte da &quot;terze parti&quot; è disciplinata dalle relative informative cui si prega di fare riferimento. Per garantire una maggiore trasparenza e comodità, si riportano qui di seguito gli indirizzi web delle diverse informative e delle modalità per la gestione dei cookie.
                    </p>
                    <p>
                        Questi plug-in non impostano un cookie, ma se esso è già presente sul computer del visitatore sono in grado di leggerlo ed utilizzarlo secondo le sue impostazioni. La raccolta e l&apos;uso delle informazioni da parte di tali terzi sono regolati dalle rispettive informative privacy alle quali si rinvia.
                    </p>
                    <p>
                        Si ricorda, inoltre, che se si fa un &quot;clic&quot; su questi link, tali siti web potrebbero inserire dei cookie una volta che ci si connette ai loro servizi.
                    </p>
                    <p>
                        I cookie social non sono necessari alla navigazione e, come stabilito dall&apos;Autorità Garante per la protezione dei dati italiana, se rientrano tra quelli di profilazione, deve essere fornito il consenso per l&apos;installazione di tali cookie sul dispositivo dell&apos;utente. Nel caso specifico, tuttavia, si tratta di semplici link a siti terze parti che non installano cookie di profilazione.
                    </p>
                    <p>
                        In particolare, il presente Sito utilizza i plug-in di Facebook e Linkedin. I cookie di queste terze parti non sono sotto il controllo del Titolare e, pertanto, per ulteriori informazioni su come la terza parte utilizzi i cookie, si consiglia di visitare il relativo sito web di cui qui di seguito si riportano gli indirizzi web ove è possibile anche reperire le specifiche informative e le modalità di gestione dei cookies:
                    </p>
                    <ul>
                        <li>Facebook:  <Link href="http://www.facebook.com/about/privacy/">http://www.facebook.com/about/privacy/ </Link></li>
                        <li>Linkedin:  <Link href="https://www.linkedin.com/legal/cookie-policy">https://www.linkedin.com/legal/cookie-policy </Link></li>
                    </ul>

                    <h4><u>Interazione con social network e piattaforme esterne</u></h4>
                    <p>
                        Questo tipo di servizi permette di effettuare interazioni con i social network, o con altre piattaforme esterne, direttamente dalle pagine di questo Sito. Le interazioni e le informazioni acquisite da questo Sito sono in ogni caso soggette alle impostazioni privacy dell&apos;Utente relative ad ogni social network. Questo tipo di servizio potrebbe comunque raccogliere dati sul traffico per le pagine dove il servizio è installato, anche quando gli Utenti non lo utilizzano. Si raccomanda di disconnettersi dai rispettivi servizi per assicurarsi che i dati elaborati su questo Sito Web non vengano ricollegati al profilo dell&apos;Utente.
                    </p>

                    <h4><u>Pulsante Mi Piace e widget sociali di Facebook (Facebook, Inc.)</u></h4>
                    <p>
                        Il pulsante &quot;Mi Piace&quot; e i widget sociali di Facebook sono servizi di interazione con il social network Facebook, forniti da Facebook, Inc.
                    </p>
                    <p>
                        Dati Personali raccolti: Cookie e Dati di utilizzo. Luogo del trattamento: Stati Uniti &mdash;{" "}
                         <Link href="https://www.facebook.com/privacy/explanation">Privacy Policy </Link>. Soggetto aderente al Privacy Shield.
                    </p>

                    <h4><u>Pulsante e widget sociali di Linkedin (LinkedIn Corporation)</u></h4>
                    <p>
                        Il pulsante e i widget sociali di LinkedIn sono servizi di interazione con il social network Linkedin, forniti da LinkedIn Corporation. Dati Personali raccolti: Cookie e Dati di utilizzo. Luogo del trattamento: Stati Uniti &mdash;{" "}
                         <Link href="https://www.linkedin.com/legal/privacy-policy">Privacy Policy </Link>.
                    </p>

                    <h3><strong>Gestione dei cookie: consenso al relativo utilizzo</strong></h3>
                    <p>
                        La cancellazione dei cookies non preclude l&apos;utilizzo del sito ma può comportare delle variazioni nella navigazione.
                    </p>
                    <p>
                        Gli utenti/visitatori possono impostare il browser del computer in modo tale che accetti/rifiuti tutti i cookies o visualizzi un avviso ogni qual volta viene proposto un cookie, per poter valutare se accettarlo o meno.
                    </p>
                    <p>Vi sono a tale scopo dei componenti (plugin) per i più diffusi browser che consentono:</p>
                    <ul>
                        <li>la gestione (visualizzazione, cancellazione, blocco) dei cookie;</li>
                        <li>la disabilitazione di pagine javascript di terze parti;</li>
                        <li>la visualizzazione delle tecnologie impiegate dal sito;</li>
                        <li>la visualizzazione ed il blocco (selettivo) dei diversi meccanismi di tracciamento.</li>
                    </ul>
                    <p>
                        Per default quasi tutti i browser web sono impostati per accettare automaticamente i cookie. Puoi comunque modificare la configurazione predefinita, che con browser (come, ad es. Internet Explorer) è quella media, e disabilitare i cookie (cioè bloccarli in via definitiva), impostando, nell&apos;apposita scheda (&quot;Privacy&quot;), il livello di protezione più elevato (Altissimo), ma ti informiamo che la disabilitazione può compromettere l&apos;utilizzo di funzioni del sito. In ogni caso, hai anche la possibilità di cancellare (o eliminare) i cookie dal tuo personal computer, utilizzando l&apos;apposita funzione presente nel tuo browser. La cancellazione dei cookie non preclude l&apos;utilizzo del sito, ma comporta la ripetizione della procedura di autenticazione, ovvero il reinserimento delle tue credenziali d&apos;accesso nell&apos;area riservata. Se vuoi decidere di volta in volta se accettare o meno i cookie, puoi anche configurare il tuo browser affinché generi un avviso ogni volta che viene salvato un cookie.
                    </p>

                    <h4><strong>Durata</strong></h4>
                    <p>
                        I Cookies utilizzati sono cookies di sessione ovvero cookie temporanei che aiutano la navigazione dell&apos;utente all&apos;interno del sito e ricordano le scelte effettuate durante la sessione. Questi cookies si disattivano non appena si lascia il sito oppure dopo un arco di tempo di inutilizzo. Non vengono utilizzati cookies pubblicitari.
                    </p>

                    <h4><strong>Come disabilitare i cookie mediante configurazione del browser</strong></h4>
                    <p>
                        La maggior parte dei browser (Internet Explorer, Firefox, Chrome etc.) sono configurati per accettare i cookie. Tuttavia, la maggior parte dei browser permette di controllare e anche disabilitare i cookie attraverso le impostazioni del browser (ad esempio, in Firefox, attraverso il menu Strumenti &rarr; Opzioni &rarr; Privacy, è possibile accedere a un pannello di controllo dove è possibile definire se accettare o meno i diversi tipi di cookie e procedere alla loro rimozione). Si ricorda però che disabilitare i cookie di navigazione o quelli funzionali può causare il malfunzionamento del sito e/o limitare il servizio offerto.
                    </p>
                    <p>La disabilitazione dei cookie di &quot;terze parti&quot; non pregiudica in alcun modo la navigabilità.</p>

                    <h4><u>Google Chrome</u></h4>
                    <ol>
                        <li>Eseguire il Browser Chrome</li>
                        <li>Fare click sul menù presente nella barra degli strumenti del browser a fianco della finestra di inserimento url per la navigazione</li>
                        <li>Selezionare Impostazioni</li>
                        <li>Fare clic su Mostra Impostazioni Avanzate</li>
                        <li>Nella sezione &quot;Privacy&quot; fare clic su bottone &quot;Impostazioni contenuti&quot;</li>
                        <li>
                            Nella sezione &quot;Cookie&quot; è possibile modificare le seguenti impostazioni relative ai cookie:
                            <ul>
                                <li>Consentire il salvataggio dei dati in locale</li>
                                <li>Modificare i dati locali solo fino alla chiusura del browser</li>
                                <li>Impedire ai siti di impostare i cookie</li>
                                <li>Bloccare i cookie di terze parti e i dati dei siti</li>
                                <li>Gestire le eccezioni per alcuni siti internet</li>
                                <li>Eliminazione di uno o tutti i cookie</li>
                            </ul>
                        </li>
                    </ol>
                    <p>
                        Per maggiori informazioni visita la pagina dedicata{" "}
                         <Link href="https://support.google.com/chrome/answer/95647?hl=it">https://support.google.com/chrome/answer/95647?hl=it </Link>.
                    </p>

                    <h4><u>Mozilla Firefox</u></h4>
                    <ol>
                        <li>Eseguire il Browser Mozilla Firefox</li>
                        <li>Fare click sul menù presente nella barra degli strumenti del browser a fianco della finestra di inserimento url per la navigazione</li>
                        <li>Selezionare Opzioni</li>
                        <li>Seleziona il pannello Privacy</li>
                        <li>Fare clic su Mostra Impostazioni Avanzate</li>
                        <li>Nella sezione &quot;Privacy&quot; fare clic su bottone &quot;Impostazioni contenuti&quot;</li>
                        <li>
                            Nella sezione &quot;Tracciamento&quot; è possibile modificare le seguenti impostazioni relative ai cookie:
                            <ul>
                                <li>Richiedi ai siti di non effettuare alcun tracciamento</li>
                                <li>Comunica ai siti la disponibilità ad essere tracciato</li>
                                <li>Non comunicare alcuna preferenza relativa al tracciamento dei dati personali</li>
                            </ul>
                        </li>
                        <li>
                            Dalla sezione &quot;Cronologia&quot; è possibile:
                            <ul>
                                <li>Abilitando &quot;Utilizza impostazioni personalizzate&quot; selezionare di accettare i cookie di terze parti (sempre, dai siti più visitati o mai) e di conservarli per un periodo determinato (fino alla loro scadenza, alla chiusura di Firefox o di chiedere ogni volta)</li>
                                <li>Rimuovere i singoli cookie immagazzinati</li>
                            </ul>
                        </li>
                    </ol>
                    <p>
                        Per maggiori informazioni visita la pagina dedicata{" "}
                         <Link href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie">https://support.mozilla.org/it/kb/Gestione%20dei%20cookie </Link>.
                    </p>

                    <h4><u>Internet Explorer</u></h4>
                    <ol>
                        <li>Eseguire il Browser Internet Explorer</li>
                        <li>Fare click sul pulsante Strumenti e scegliere Opzioni Internet</li>
                        <li>
                            Fare click sulla scheda Privacy e nella sezione Impostazioni modificare il dispositivo di scorrimento in funzione dell&apos;azione desiderata per i cookie:
                            <ul>
                                <li>Bloccare tutti i cookie</li>
                                <li>Consentire tutti i cookie</li>
                                <li>Selezione dei siti da cui ottenere cookie: spostare il cursore in una posizione intermedia in modo da non bloccare o consentire tutti i cookie, premere quindi su Siti, nella casella Indirizzo Sito Web inserire un Sito internet e quindi premere su Blocca o Consenti</li>
                            </ul>
                        </li>
                    </ol>
                    <p>
                        Per maggiori informazioni visita la pagina dedicata{" "}
                         <Link href="http://windows.microsoft.com/it-it/windows7/how-to-manage-cookies-in-internet-explorer-9">http://windows.microsoft.com/it-it/windows7/how-to-manage-cookies-in-internet-explorer-9 </Link>.
                    </p>

                    <h4><u>Safari OS X</u></h4>
                    <ol>
                        <li>Eseguire il Browser Safari</li>
                        <li>Fare click su Safari, selezionare Preferenze e premere su Privacy</li>
                        <li>Nella sezione Blocca Cookie specificare come Safari deve accettare i cookie dai siti</li>
                        <li>Per visionare quali siti hanno immagazzinato i cookie cliccare su Dettagli</li>
                    </ol>
                    <p>Per maggiori informazioni visita la pagina dedicata.</p>

                    <h4><u>Safari iOS</u></h4>
                    <ol>
                        <li>Eseguire il Browser Safari iOS</li>
                        <li>Tocca su Impostazioni e poi Safari</li>
                        <li>Tocca su Blocca Cookie e scegli tra le varie opzioni: &quot;Mai&quot;, &quot;Di terze parti e inserzionisti&quot; o &quot;Sempre&quot;</li>
                        <li>Per cancellare tutti i cookie immagazzinati da Safari, tocca su Impostazioni, poi su Safari e infine su Cancella Cookie e dati</li>
                    </ol>
                    <p>
                        Per maggiori informazioni visita la pagina dedicata{" "}
                         <Link href="http://support.apple.com/kb/HT1677?viewlocale=it_IT">http://support.apple.com/kb/HT1677?viewlocale=it_IT </Link>.
                    </p>

                    <h4><u>Opera</u></h4>
                    <ol>
                        <li>Eseguire il Browser Opera</li>
                        <li>Fare click sul Preferenze poi su Avanzate e infine su Cookie</li>
                        <li>
                            Selezionare una delle seguenti opzioni:
                            <ul>
                                <li>Accetta tutti i cookie</li>
                                <li>Accetta i cookie solo dal Sito che si visita: i cookie di terze parti e che vengono inviati da un dominio diverso da quello che si sta visitando verranno rifiutati</li>
                                <li>Non accettare mai i cookie: tutti i cookie non verranno mai salvati.</li>
                            </ul>
                        </li>
                    </ol>
                    <p>
                        Per maggiori informazioni visita la pagina dedicata{" "}
                         <Link href="http://help.opera.com/Windows/10.00/it/cookies.html">http://help.opera.com/Windows/10.00/it/cookies.html </Link>.
                    </p>

                    <p>
                        Per avere informazioni generali sui cookie che possono essere archiviati sul proprio terminale e disattivarli singolarmente qualora vi sia una loro presenza si rinvia ai link:{" "}
                         <Link href="http://www.aboutcookies.org/">http://www.aboutcookies.org/ </Link> o{" "}
                         <Link href="http://www.youronlinechoices.com/it/le-tue-scelte">http://www.youronlinechoices.com/it/le-tue-scelte </Link>.
                    </p>

                    <h3><strong>Diritti dell&apos;interessato</strong></h3>
                    <p>
                        Per ricevere assistenza o spiegazioni su come esercitare il consenso (se dovuto) o il diniego selettivo o su come cancellare i cookie dal proprio browser ovvero per esercitare qualunque diritti previsti dalla normativa italiana ed europea in materia di trattamento dei dati personali (artt. 15-22 GDPR n. 679/2016), l&apos;Utente può rivolgersi all&apos; e-mail{" "}
                         <Link href="mailto:info@farmacontatto.it">info@farmacontatto.it </Link>; a tale indirizzo è possibile effettuare reclami/segnalazioni circa il funzionamento dei cookies.
                    </p>
                    <p>
                        Si ricorda inoltre che l&apos;Utente ha sempre il diritto di proporre un reclamo all&apos;Autorità Garante per la protezione dei dati personali per l&apos;esercizio dei suoi diritti o per qualsiasi altra questione relativa al trattamento dei suoi dati personali.
                    </p>

                    <h3><strong>Titolare del trattamento</strong></h3>
                    <p>
                        Il titolare del trattamento dei dati raccolti a seguito della consultazione di questo sito, per i cookie di prima parte, è la società{" "}
                        <span className="s1">Farmacontatto S.r.l. con sede legale a Milano in Via Giambellino, 119, Email: achille.bonzini@farmacontatto.it - PEC : farmacontatto.pec.it - P. IVA 09550310966 REA CCIAA Milano 2098123.</span>
                    </p>

                    <h3><strong>Aggiornamento</strong></h3>
                    <p>
                        La nostra Informativa sulla privacy può cambiare di tanto in tanto e qualsiasi modifica sarà comunicata all&apos;utente tramite un&apos;email o un avviso sul nostro sito web; per tale motivo si invita l&apos;Utente a consultarla con regolarità.
                    </p>
                    <p>
                        Per ottenere tutte le altre informazioni sul trattamento dei dati degli utenti si prega di consultare anche la privacy policy generale del sito web.
                    </p>
                    <p>Ultimo aggiornamento Dicembre 2021</p>
                </div>
            </main>
        </>
    );
}
