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

export default function InviaMail({ etichetta = "Contattaci", rif_farm = "" }) {
  const [show, setShow] = useState(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [privacy, setPrivacy] = useState(false);

  const resetForm = () => {
    setNome("");
    setCognome("");
    setEmail("");
    setMessaggio("");
    setPrivacy(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const res = await axios.post(API_PATH, {
        fname: nome,
        lname: cognome,
        email,
        message: messaggio,
        rif: rif_farm,
        testcode: "ceo53j@!3w!fjio@",
      });

      if (res.data?.response === 1) {
        setSuccess(true);
        resetForm();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
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
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>Nome</Form.Label>
              <Col sm={9}>
                <Form.Control
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>Cognome</Form.Label>
              <Col sm={9}>
                <Form.Control
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>Email</Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>Messaggio</Form.Label>
              <Col sm={9}>
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
              <Col sm={{ span: 9, offset: 3 }}>
                <Form.Check
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  required
                  label={
                    <>
                      Ho letto e accetto la{" "}
                     <Link href="/privacy" target="_blank">
                        Privacy policy
                     </Link>
                    </>
                  }
                />
              </Col>
            </Form.Group>

            <Button type="submit" disabled={loading}>
              {loading ? "Invio..." : "Invia messaggio"}
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer className="flex-column align-items-start">
          <div>
            Oppure chiama <b>Achille Bonzini</b>{" "}
           <Link href="tel:+393277147618">327 7147618</Link>
          </div>

          <Button variant="secondary" onClick={() => setShow(false)}>
            Chiudi
          </Button>

          <div className="w-100">
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