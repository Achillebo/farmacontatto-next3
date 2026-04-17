"use client";

import Accordion from "react-bootstrap/Accordion";

export default function FarmaciaAccordion({ farma }) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Fatturato: {farma.fatturato}
        </Accordion.Header>
        <Accordion.Body>
          {farma.testo_fatturato}
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Finanziabilità: {farma.finanziabilita}
        </Accordion.Header>
        <Accordion.Body>
          {farma.testo_finanziabilita}
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Altre caratteristiche: {farma.altre_caratteristiche}
        </Accordion.Header>
        <Accordion.Body>
          {farma.testo_altre_caratteristiche}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}