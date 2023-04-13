import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


function AboutUs() {
  return (
    <div>
        <h3>Tentang Kami</h3>
    <Tab.Container defaultActiveKey="first" >
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Apa itu Mudiana Corp</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Mengapa Mudiana Corp</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Apakah Mudiana Corp Aman</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h5>Mudiana Corp merupakan penyedia layanan Ransum untuk memenuhi kebutuhan para player Ragnarok X Next Generation. </h5>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <h5>Karena kami telah berpengalam selama 2 tahun sebagai Supplier penyedia ransum bagi para player.</h5>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <h5>Tentu saja kami karena kami sudah berpengalaman dan sudah banyak sekali client yang mempercayakan kebutuhan ransum mereka kepada kami.</h5>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
}

export default AboutUs;