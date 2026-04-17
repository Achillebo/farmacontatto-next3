"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Link from "next/link";

const API_PATH = "https://org.farmacontatto.it/api/contact/sendmail.php";

export default function InviaMail(props) {
  const [show, setShow] = useState(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // form state
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [privacy, setPrivacy] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const resetForm = () => {
    setNome("");
    setCognome("");
    setEmail("");
    setMessaggio("");
    setPrivacy(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    const payload = {
      fname: nome,
      lname: cognome,
      email: email,
      message: messaggio,
      sito: "Farmacontatto",
      oggetto: "Richiesta di contatto da Farmacontatto",
      testcode: "ceo53j@!3w!fjio@",
      tipo: props.rif_tipo,
      titoloinserzione: props.rif_titolo_inserzione,
      riff: props.riffarma,
    };

    try {
      const res = await fetch(API_PATH, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data?.response === 1) {
        setSuccess(true);
        resetForm();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <>
      {/* BUTTON */}
      <Button variant="warning" onClick={handleShow}>
        Ulteriori informazioni
      </Button>

      {/* MODAL */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        onExit={() => {
          setSuccess(false);
          setError(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Richiesta informazioni - Rif: {props.riffarma}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={submitHandler}>

            {/* NOME */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Nome</Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>

            {/* COGNOME */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Cognome</Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>

            {/* EMAIL */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Email</Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>

            {/* MESSAGGIO */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Messaggio</Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={messaggio}
                  onChange={(e) => setMessaggio(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>

            {/* PRIVACY */}
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  required
                  label={
                    <>
                      Ho letto e accetto la{" "}
                     <Link href="/privacy">Privacy policy</Link>
                    </>
                  }
                />
              </Col>
            </Form.Group>

            {/* SUBMIT */}
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit" disabled={loading}>
                  {loading ? "Invio..." : "Invia messaggio"}
                </Button>
              </Col>
            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer className="position-relative">

          <div className="w-100 text-center">
            <small>
              Oppure chiama <b>Achille Bonzini</b>{" "}
             <Link href="tel:+393277147618">327 7147618</Link>
            </small>
          </div>

          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>

          {/* ALERT */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
            <Alert show={success} variant="success">
              Messaggio inviato
            </Alert>

            <Alert show={error} variant="danger">
              Messaggio non inviato
            </Alert>
          </div>

        </Modal.Footer>
      </Modal>
    </>
  );
}