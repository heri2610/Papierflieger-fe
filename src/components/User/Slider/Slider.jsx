import React from "react";
import Korea from "./destinasi/Korea.png";
import Dubai from "./destinasi/Dubai.png";
import Bali from "./destinasi/Bali.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Slider.scss";

// import required modules
import { Pagination } from "swiper";

const Slider = () => {
  return (
    <div className="slider">
      <h2 className="text-center fw-bold" id="destinasi">
        DESTINASI
      </h2>
      <Swiper
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to={"/destinasi"}>
            <div className="template">
              <div className="box">
                <div className="box-image">
                  <img src={Korea} alt="" />
                </div>
                <ul className="title">
                  <li>
                    <button>
                      <p>Seoul, Korea</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/destinasi"}>
            <div className="template">
              <div className="box">
                <div className="box-image">
                  <img src={Bali} alt="" />
                </div>
                <ul className="title">
                  <li>
                    <button>
                      <p>Bali, Indonesia</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/destinasi"}>
            <div className="template">
              <div className="box">
                <div className="box-image">
                  <img src={Dubai} alt="" />
                </div>
                <ul className="title">
                  <li>
                    <button>
                      <p>Dubai, Uni Emirat Arab</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
