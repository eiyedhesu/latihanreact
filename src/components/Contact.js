import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'
import waku from '../assets/images/wa.png'
import fbku from '../assets/images/fb.png'
import igku from '../assets/images/ig.png'
function FormContact() {
  return (
   <div>
    <h3>Segera Kontak kami Untuk Pemesanan</h3>
    <br></br>
   <Container>
    <Row>
        <Col sm = {6}>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        
        </Col>
        <Col>
       
        <ListGroup variant="flush">
      <ListGroup.Item> <Image width={50} src={waku}></Image> {''}+62-123-4567-8999</ListGroup.Item>
      <ListGroup.Item><Image width={50} src={fbku}></Image> {''}Mudiana Corp</ListGroup.Item>
      <ListGroup.Item><Image width={50} src={igku}></Image> {''}Mudiana Corp</ListGroup.Item>

    </ListGroup>

        
        </Col>
    </Row>
   </Container>
   
    </div>
  );
}

export default FormContact;