import bannerimage from "../assets/images/banner1.png";
import banner2image from "../assets/images/banner2.jpg"

import Carousel from 'react-bootstrap/Carousel';

function Intro() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="slidebanner1"
          src={bannerimage}
          alt="First slide"
          width={800}
          height={400}
        />
        <Carousel.Caption>
          <h1>Stok Resource anda sedikit ?</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="slidebanner2"
          src={banner2image}
          alt="Second slide"
          width={800}
          height={400}
        />
        <Carousel.Caption>
          <h1>Ingin mencari Supplier tetap ?</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
           className="slidebanner1"
           src={bannerimage}
           alt="First slide"
           width={800}
           height={400}
        />
        <Carousel.Caption>
          <h1>Mudiana Corp Solusinya</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Intro;