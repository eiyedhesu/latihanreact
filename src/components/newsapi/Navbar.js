import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"


function Navigasi() {
    return (
      
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Portal Berita</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    )
}

export default Navigasi