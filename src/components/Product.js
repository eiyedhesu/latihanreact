import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import zenyrox from '../assets/images/zeny.webp'
import crystalrox from '../assets/images/crystal.png'
import diamondrox from '../assets/images/diamond.png'
function ProductUS() {
  return (
    <div>
        <h3>Produk Mudiana Corp</h3>
        <br></br>
    <Container>
        <Row>
            <Col sm={4}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="left" src={zenyrox} />
      <Card.Body>
        <Card.Title>Zeny</Card.Title>
        <Card.Text>
          Zeny merupakan salah satu dari 3 mata uang dalam Ragnarok X yang digunakan untuk Upgrade, Enchant, Refine dll
        </Card.Text>
        <Button href="#">Pesan Sekarang</Button> 
      </Card.Body>
    </Card>            
            </Col>
            <Col sm={4}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={zenyrox} />
      <Card.Body>
        <Card.Title>Crystal</Card.Title>
        <Card.Text>
          Crystal merupakan sebuah alat transaksi untuk keperluan belanja item di Exchange Center.
        </Card.Text>
        <Button href="#">Pesan Sekarang</Button> 
      </Card.Body>
    </Card>            
            </Col>
            <Col sm={4}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={diamondrox} />
      <Card.Body>
        <Card.Title>Diamond</Card.Title>
        <Card.Text>
          Diamond merupakan alat transaksi untuk membeli atau Bid item tier Emas.
        </Card.Text>
        <Button href="#">Pesan Sekarang</Button> 
      </Card.Body>
    </Card>            
            </Col>
        </Row>
    </Container>
    </div>
  );
}

export default ProductUS;