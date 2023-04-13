import { Container, Nav , Navbar } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
           <Navbar>
           <Container>
            <Navbar.Brand>Mudiana Corp</Navbar.Brand>
           <Nav>
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>About Us</Nav.Link>
                <Nav.Link>Product</Nav.Link>
                <Nav.Link>Contact Us</Nav.Link>
            </Nav>
           </Container>
           </Navbar>
           
        </div>
    )
}
export default NavigationBar