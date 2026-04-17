"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from '@/components/Immagini/logo.png';

import ContattiBtnNavbar from "./ContattiBtnNavbar";

export default function Navbar1() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid className="px-4">

        <ContattiBtnNavbar />

        <Image
          src={logo}
          alt="Compravendita di farmacie - Farmacontatto"
          width={60}
          height={60}
          style={{ marginRight: 15 }}
        />

        <Navbar.Brand as={Link} href="/">
          Farmacontatto
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} href="/">Home</Nav.Link>

            <Nav.Link as={Link} href="/farmacie-in-vendita">
              Farmacie in vendita
            </Nav.Link>

            <Nav.Link as={Link} href="/chi-siamo">
              Chi siamo
            </Nav.Link>

            <Nav.Link as={Link} href="/consigli">
              Consigli
            </Nav.Link>

            <NavDropdown title="Servizi" id="servizi-nav-dropdown">

              <NavDropdown.Item as={Link} href="/compravendita-farmacie">
                Compravendita farmacie
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} href="/comprare-una-farmacia">
                Comprare una Farmacia
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} href="/vendere-la-farmacia">
                Vendere una Farmacia
              </NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Privacy & Cookie" id="privacy-nav-dropdown">

              <NavDropdown.Item as={Link} href="/condizioni">
                Condizioni d’uso
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} href="/privacy">
                Privacy
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} href="/cookies">
                Cookie
              </NavDropdown.Item>

            </NavDropdown>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}