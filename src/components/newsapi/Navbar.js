import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"


function Navigasi() {
    return (
      
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Portal Berita</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/tos">Term Of Service</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    )
}

export default Navigasi