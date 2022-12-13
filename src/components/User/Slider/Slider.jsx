import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Korea from "./destinasi/Korea.png";
import Dubai from "./destinasi/Dubai.png";
import Bali from "./destinasi/Bali.png";
import "./Slider.scss";

function ImageSlider() {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div className="container mt-5 carousel">
      <div className="slider_title">
        <h3>Destinasi</h3>
      </div>
      <Slider {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={Korea} alt="" />
            </div>
            <ul className="text-country">
              <li>
                <button>
                  <p>Seoul, Korea</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={Dubai} alt="" />
              <div className="card">
                <div className="card-image">
                  <img src={Dubai} alt="" />
                </div>
                <ul className="text-country">
                  <li>
                    <button>
                      <p>Dubai, Uni Emirat Arab</p>
                    </button>
                  </li>
                </ul>
              </div>
              <ul class="text-country">
                <li>
                  <button>
                    <p>Dubai, Uni Emirat Arab</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={Bali} alt="" />
              </div>
              <ul className="text-country">
                <li>
                  <button>
                    <p>Bali, Indonesia</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={Korea} alt="" />
              </div>
              <ul className="text-country">
                <li>
                  <button>
                    <p>Seoul, Korea</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={Dubai} alt="" />
              </div>
              <ul className="text-country">
                <li>
                  <button>
                    <p>Dubai, Uni Emirat Arab</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={Bali} alt="" />
              </div>
              <ul className="text-country">
                <li>
                  <button>
                    <p>Bali, Indonesia</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={Korea} alt="" />
              </div>
              <ul className="text-country">
                <li>
                  <button>
                    <p>Seoul, Korea</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={Dubai} alt="" />
              </div>
              <ul className="text-country">
                <li>
                  <button>
                    <p>Dubai, Uni Emirat Arab</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={Bali} alt="" />
              </div>
              <ul className="text-country">
                <li>
                  <button>
                    <p>Bali, Indonesia</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
