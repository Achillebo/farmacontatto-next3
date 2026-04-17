"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "@/components/immagini/logo.png";
import ContattiBtnNavbar from "./ContattiBtnNavbar";

export default function Navbar1() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(prev => (prev ? false : "expanded"));
  };

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="shadow-sm"
    >
      <Container fluid className="px-4">

        <ContattiBtnNavbar />

        <Image
          src={logo}
          alt="Compravendita di farmacie - Farmacontatto"
          width={60}
          height={60}
          style={{ marginRight: 15 }}
        />

        <Navbar.Brand as={Link} href="/" onClick={closeMenu}>
          Farmacontatto
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} href="/" onClick={closeMenu}>
              Home
            </Nav.Link>

            <Nav.Link as={Link} href="/farmacie-in-vendita" onClick={closeMenu}>
              Farmacie in vendita
            </Nav.Link>

            <Nav.Link as={Link} href="/chi-siamo" onClick={closeMenu}>
              Chi siamo
            </Nav.Link>

            <Nav.Link as={Link} href="/consigli" onClick={closeMenu}>
              Consigli
            </Nav.Link>

            <NavDropdown title="Servizi" id="servizi-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                href="/compravendita-farmacie"
                onClick={closeMenu}
              >
                Compravendita farmacie
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                href="/comprare-una-farmacia"
                onClick={closeMenu}
              >
                Comprare una Farmacia
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                href="/vendere-la-farmacia"
                onClick={closeMenu}
              >
                Vendere una Farmacia
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Privacy & Cookie" id="privacy-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                href="/condizioni"
                onClick={closeMenu}
              >
                Condizioni d’uso
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                href="/privacy"
                onClick={closeMenu}
              >
                Privacy
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                href="/cookies"
                onClick={closeMenu}
              >
                Cookie
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}