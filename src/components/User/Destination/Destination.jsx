import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import Balii from "../../../assets/images/bali1.svg";
import Bali from "../../../assets/images/Bali.svg";

import "./destination.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Destination = () => {
  return (
    <div>
      <div className="container-fluid p-0 img-banner">
        <img className="img-fluid mb-3" src={Bali} alt="" />
      </div>
      <div className="container">
        <Swiper
          slidesPerView={2}
          loop={false}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="destination-img d-flex justify-content-center">
              <img src={Balii} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="destination-img d-flex justify-content-center">
              <img src={Balii} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="destination-img d-flex justify-content-center">
              <img src={Balii} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container pt-4 mb-5">
        <div className="row g-4">
          <div className="col-md">
            <div className="card">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="card-title">
                    <h3>Tentang Pura Ulun Danu Beratan</h3>
                    <p>Bali, Indonesia</p>
                  </div>
                  <div>
                    <OverlayTrigger
                      key="bottom"
                      placement="bottom"
                      overlay={
                        <Tooltip id={`tooltip-bottom`}>
                          Tambah ke wishlist
                        </Tooltip>
                      }
                    >
                      <div className="icon-wishlist"><BsFillBookmarkStarFill size="25px" /></div>
                    </OverlayTrigger>
                  </div>
                </div>

                <div className="card-text">
                  Pura Ulun Danu Beratan / Pura Penataran Agung Ulun Danu
                  Beratan adalah salah satu dari sembilan Pura Khayangan Jagat
                  yang mengelilingi Pulau Bali, Pura ini adalah tempat yang
                  digunakan oleh umat Hindu di Bali maupun Indonesia untuk
                  memuja Tuhan Yang Maha Esa dalam manifestasi nya sebagai
                  “Tri Murti” (Brahma, Wisnu & Siwa) dalam pengharapannya
                  untuk kesuburan Tanah, Kemakmuran dan kesejahteraan manusia
                  termasuk juga demi lestarinya alam semesta.
                  <br />
                  <br />
                  Secara Historis Pura Ulun Danu Beratan dibangun oleh
                  “I Gusti Agung Putu” Raja Puri Mengwi pertama pada Tahun
                  Saka 1556 (Tahun Masehi 1634 masehi), dan diempon oleh Empat
                  Satakan dari Desa Adat di sekitar Pura yang terdiri dari:
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
