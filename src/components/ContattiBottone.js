"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Alert } from "react-bootstrap";

const API_PATH = "https://org.farmacontatto.it/api/contact/sendmail.php";

function InviaMail({ etichetta = "Contattaci" }) {
  const [show, setShow] = useState(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [mail, setMail] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [privacy, setPrivacy] = useState(false);

  const resetForm = () => {
    setNome("");
    setCognome("");
    setMail("");
    setMessaggio("");
    setPrivacy(false);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setSuccess(false);
    setError(false);

    const payload = {
      fname: nome,
      lname: cognome,
      email: mail,
      message: messaggio,
      sito: "Farmacontatto",
      tipo: "contatto",
      oggetto: "Richiesta di contatto da Farmacontatto",
      testcode: "ceo53j@!3w!fjio@",
      riff: "",
    };

    try {
      const res = await axios.post(API_PATH, payload, {
        headers: { "content-type": "application/json" },
      });

      if (res.data?.response === 1) {
        setSuccess(true);
        resetForm();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <Button variant="warning" onClick={() => setShow(true)}>
        {etichetta}
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        onExit={() => {
          setSuccess(false);
          setError(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Richiesta di contatto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={submitHandler}>
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

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Email</Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>

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

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Invia messaggio</Button>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Col sm={{ span: 10 }}>
            <Form.Label>
              Oppure chiama <b>Achille Bonzini</b>{" "}
             <Link href="tel:+393277147618">327 7147618</Link>
            </Form.Label>
          </Col>

          <Button variant="secondary" onClick={() => setShow(false)}>
            Chiudi
          </Button>

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

export default InviaMail;