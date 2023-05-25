import { Button, Card, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
const AboutPage = () => {
    const navigate = useNavigate () 

    const hancleClick = () =>{
        navigate('../')
    }    
    return (
      <Container>
        <h3>Halaman About</h3>
        <Card>
            <Card.Img></Card.Img>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
            </Card.Body>
            <Button variant="dark" onClick={hancleClick}>Klik Menuju Home</Button>
        </Card>
      </Container>
    )
}

export default AboutPage