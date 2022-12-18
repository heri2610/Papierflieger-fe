import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GoKyungPyo from "../../../assets/images/go_kyung_pyo.svg";
import RantiRastanti from "../../../assets/images/feby_rastanti.svg";
import VerrelBramasta from "../../../assets/images/verrel_bramasta.svg";
import Rate from "../../../assets/images/rate.svg";
import "./Testimonial.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

const Testimonial = () => {
  return (
    <div className="testimoni container">
      <h2 className="font-title" id="testimonial">TESTIMONIAL</h2>
      <Swiper
        slidesPerView={1}
        loop={false}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card card-testi">
            <div className="card-body my-2">
              <img
                className="profile-img mt-4"
                src={GoKyungPyo}
                alt="GoKyungPyo"
              />
              <p className="text-center mt-3">Go Kyung Pyo</p>
              <img className="rate" src={Rate} alt="" />
              <p className="text-center mt-3">
                "Lorem ipsum dolor sit amet,
                <br /> consectetur adipisicing elit, sed do
                <br /> eiusmod tempor incididunt ut labore etdolore magna
                aliqua."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card card-testi">
            <div className="card-body my-2">
              <img
                className="profile-img mt-4"
                src={RantiRastanti}
                alt="RantiRastanti"
              />
              <p className="text-center mt-3">Ranti Rastanti</p>
              <img className="rate" src={Rate} alt="" />
              <p className="text-center mt-3">
                "Lorem ipsum dolor sit amet,
                <br /> consectetur adipisicing elit, sed do
                <br /> eiusmod tempor incididunt ut labore et dolore magna
                aliqua."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card card-testi">
            <div className="card-body my-2">
              <img
                className="profile-img mt-4"
                src={VerrelBramasta}
                alt="VerrelBramasta"
              />
              <p className="text-center mt-3">Verrel Bramasta</p>
              <img className="rate" src={Rate} alt="" />
              <p className="text-center mt-3">
                "Lorem ipsum dolor sit amet,
                <br /> consectetur adipisicing elit, sed do
                <br /> eiusmod tempor incididunt ut labore etdolore magna
                aliqua."
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
