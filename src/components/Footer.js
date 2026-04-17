"use client";

import CookieConsent from "react-cookie-consent";
import { useCookies } from "react-cookie";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Link from "next/link";

export const Footer = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["CookieConsent"]);

  const handleResetCookies = () => {
    removeCookie("CookieConsent", { path: "/" });
    window.location.reload();
  };

  return (
    <>
<footer className="container-fluid pt-3 g-0" style={{ backgroundColor: "#444444" }}>
  
  {/* 🔥 CONTENITORE CENTRATO */}
  <div className="container">

    <Row className="text-center text-md-start">
      
      <Col md={4} className="mb-4">
        <div style={{ color: "#94D7B5" }}>PER FINANZIAMENTI</div>

        <ul className="my-footer-ul">
          <li className="my-footer-li">
            <Link className="my-footer-a" href="https://www.bancacredifarma.it/" target="_blank">
              Banca Credifarma
           </Link>
          </li>

          <li className="my-footer-li">
            <Link className="my-footer-a" href="https://www.bancaifis.it/" target="_blank">
              Banca Ifis
           </Link>
          </li>
        </ul>

        <button
          type="button"
          style={{ backgroundColor: "#444444", color: "#94D7B5" }}
          onClick={handleResetCookies}
        >
          Gestione Cookies
        </button>
      </Col>

      <Col md={4} className="mb-4">
        <div style={{ color: "#94D7B5" }}>INFORMAZIONI</div>

        <div>
          <strong style={{ color: "#ffffff" }}>
            Farmacontatto S.r.l.
          </strong>

          <br />

         <Link href="tel:3277147618">
            <span style={{ color: "#ffffff" }}>Cell: 327 7147618</span>
         </Link>

          <div style={{ color: "#bfbfbf" }}>
            Milano
            <br />
            P.Iva e C.F. 09550310966
            <br />
            R.E.A. MI-2098123
            <br />
            Cap. Soc. € 10.000,00 I.V.
          </div>
        </div>
      </Col>

      <Col md={4} className="mb-4">
        <div style={{ color: "#94D7B5" }}>PRIVACY & COOKIES</div>

        <ul className="my-footer-ul">
          <li className="my-footer-li">
            <Link className="my-footer-a" href="/condizioni">
              Condizioni d’uso e Termini del servizio
           </Link>
          </li>

          <li className="my-footer-li">
            <Link className="my-footer-a" href="/privacy">
              Trattamento dei dati personali (Privacy)
           </Link>
          </li>

          <li className="my-footer-li">
            <Link className="my-footer-a" href="/cookies">
              Informazioni Generali sull’Uso dei Cookie
           </Link>
          </li>
        </ul>
      </Col>

    </Row>

    {/* COPYRIGHT CENTRATO */}
    <Row>
      <div className="text-center p-2">
        <div style={{ color: "#94D7B5" }}>
          Copyright © 2023 Farmacontatto S.r.l.
        </div>
      </div>
    </Row>

  </div>

  {/* BUTTON FIXED (ok così) */}
  <button
    type="button"
    style={{ position: "fixed", bottom: "20px", right: "25px" }}
    onClick={handleResetCookies}
  >
    Revoca Cookies
  </button>

</footer>

      <CookieConsent
        location="bottom"
        style={{ background: "#000", textAlign: "left" }}
        buttonStyle={{ color: "#000", background: "#fff" }}
        buttonText="Accetto"
        declineButtonText="Rifiuto"
        enableDeclineButton
        expires={365}
        cookieName="CookieConsent"
      >
        Questo sito utilizza cookie tecnici e di profilazione anche di terze parti.
        Per favore leggi la nostra{" "}
       <Link href="/cookies" style={{ color: "#fff", textDecoration: "underline" }}>
          Cookie Policy
       </Link>.
      </CookieConsent>
    </>
  );
};

export default Footer;