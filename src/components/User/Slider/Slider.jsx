import React from "react";
import Carousel from "better-react-carousel";
import Bali from './img/Bali.png';
import Dubai from './img/Dubai.png';
import Korea from "./img/Korea.png";

export default function Slider() {
  return (
    <div id="destinasi">
      <h3 className="text-center my-5 fw-bold">DESTINASI</h3>
      <Carousel
        cols={3}
        rows={1}
        gap={3}
        showDots={true}
        loop={true}
        hideArrow={true}
        dotColorActive="#0060C2"
        scrollSnap={true}
      >
        <Carousel.Item>
          <img src={Korea} className="d-block mx-auto" alt="Korea" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Dubai} className="d-block mx-auto" alt="Dubai" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Bali} className="d-block mx-auto" alt="Bali" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Dubai} className="d-block mx-auto" alt="Dubai" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
