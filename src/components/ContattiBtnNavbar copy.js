"use client";
import { useState } from 'react';
import axios from 'axios';
import Link from "next/link";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from 'react-bootstrap';

// fare ricerca globale per "vendofarmacie" e sistemare il tutto per deploy
const API_PATH = 'https://org.farmacontatto.it/api/contact/sendmail.php';

function InviaMail(parametro) {

  const [invisibleSuccess, setInvisibleSuccess] = useState(false);
  const [invisibleDanger, setInvisibleDanger] = useState(false);
  // const [message, setMessage] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [enteredNome, setNome] = useState('');
  const [enteredCognome, setCognome] = useState('');
  const [enteredMail, setMail] = useState('');
  const [enteredMessaggio, setMessaggio] = useState('');
  const [enteredCheck, setCheck] = useState(false);

  const nomeChangeHandler = (event) => {
    setNome(event.target.value);
  };
  const cognomeChangeHandler = (event) => {
    setCognome(event.target.value);
  };
  const mailChangeHandler = (event) => {
    setMail(event.target.value);
  };
  const messaggioChangeHandler = (event) => {
    setMessaggio(event.target.value);
  };
  const setChecked = (event) => {
    setCheck(event.target.value);
  };
  const testcode = "ceo53j@!3w!fjio@";

  const data = JSON.stringify({
    fname: enteredNome,
    lname: enteredCognome,
    email: enteredMail,
    message: enteredMessaggio,
    sito:"Farmacontatto",
    tipo:"contatto",
    oggetto: "Richiesta di contatto da Farmacontatto",
    testcode: testcode,
    riff: "navbar"

  });

  const submitHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data
      //  data: this.state
    })
      .then((responseSubmit) => {
        console.log('sending...', responseSubmit);
        if (responseSubmit.data.response === 1) {
          setInvisibleSuccess(true);
        } else {
          setInvisibleDanger(true);
        }
      })

    //reset the values of input fields
    setNome('');
    setCognome('');
    setMail('');
    setMessaggio('');
    uncheck();

    //   return alert('Entered Values are: '+enteredNome+','+ enteredCognome +','+enteredMail +','+enteredMessaggio)
  };

  function uncheck() {
    document.getElementById("form.Check").checked = false;
  }

  return (

    <>

      {/* Visibile su schermi extra grandi */}
      <div className="d-none d-xl-block">
        <Button variant="warning"
          style={{ position: 'fixed', top: '85px', left: '25px' }}
          onClick={handleShow}>
          Contattaci
        </Button>
      </div>

      {/* Visibile su schermi grandi */}
      <div className="d-none d-lg-block d-xl-none">
        <Button variant="warning"
          style={{ position: 'fixed', top: '85px', left: '35px' }}
          onClick={handleShow}>
          Contattaci
        </Button>
      </div>

      {/* Visibile su schermi medi */}
      <div className="d-none d-md-block d-lg-none">
        <Button variant="warning"
          style={{ position: 'fixed', top: '85px', right: '35px' }}
          onClick={handleShow}>
          Contattaci
        </Button>
      </div>

      {/* Visibile su schermi piccoli */}
      <div className="d-none d-sm-block d-md-none">
        <Button variant="warning"
          style={{ position: 'fixed', top: '85px', right: '35px' }}
          onClick={handleShow}>
          Contattaci
        </Button>
      </div>

      {/* Visibile su schermi extra piccoli */}
      <div className="d-sm-block d-sm-none pt-5">
        <Button variant="warning"
          style={{ position: 'fixed', top: '85px', right: '35px' }}
          onClick={handleShow}>
          Contattaci
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        onExit={function () {
          setInvisibleDanger(false);
          setInvisibleSuccess(false);
        }}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Richiesta di contatto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>

            <Form.Group as={Row} className="mb-3" controlId="form.Nome">
              <Form.Label column sm={2}>
                Nome
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" size="sm" value={enteredNome} onChange={nomeChangeHandler} placeholder="Il tuo nome" required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="form.Cognome">
              <Form.Label column sm={2}>
                Cognome
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" size="sm" value={enteredCognome} onChange={cognomeChangeHandler} placeholder="Il tuo cognome" required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="form.Mail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" size="sm" value={enteredMail} onChange={mailChangeHandler} placeholder="Il tuo indirizzo mail" required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="form.Messaggio">
              <Form.Label column sm={2}>
                Messaggio
              </Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" rows={4} size="sm" value={enteredMessaggio} onChange={messaggioChangeHandler} placeholder="Scrivi il tuo messaggio" required />
              </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3" controlId="form.Check">
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check
                  defaultChecked={enteredCheck}
                  required />
                Ho letto e accetto la <a className="link" href="Privacy">Privacy policy</a>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Invia messaggio</Button>
              </Col>
            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Col sm={{ span: 10, offset: 5 }}>
            <Form.Label>Oppure chiama <b>Achille Bonzini</b> Cell.<Link href="tel:+393277147618">327 7147618</Link></Form.Label>
          </Col>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 999 }}>
            <Alert show={invisibleSuccess} variant="success"><Alert.Heading>Messaggio inviato</Alert.Heading></Alert>
            <Alert show={invisibleDanger} variant="danger">Messaggio non inviato</Alert>
          </div>
        </Modal.Footer>
      </Modal>

    </>

  );
}

export default InviaMail;