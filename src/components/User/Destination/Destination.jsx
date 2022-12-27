import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import "./destination.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Destination = () => {
  const { state } = useLocation();
  const destinasi = state.destinasi;
  console.log(destinasi);
  return (
    <div>
      {destinasi.image[0] && (
        <div className="container-fluid p-0 img-banner">
          <img className="img-fluid mb-3 w-100" src={destinasi.image[0]} alt="" />
        </div>
      )}
      <div className="container">
        <Swiper
          slidesPerView={2}
          loop={false}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {destinasi.image[1] &&
            destinasi.image.map((img) =>
              <SwiperSlide>
                <div className="destination-img d-flex justify-content-center">
                  <img src={img} alt="" />
                </div>
              </SwiperSlide>
            )}
        </Swiper>
      </div>
      <div className="container pt-4 mb-5">
        <div className="row g-4">
          <div className="col-md">
            <div className="card">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="card-title">
                    <h3>{destinasi.name}</h3>
                    <p>{destinasi.location}</p>
                  </div>
                  <div>
                    <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Tambah ke wishlist</Tooltip>}>
                      <div className="icon-wishlist">
                        <BsFillBookmarkStarFill size="25px" />
                      </div>
                    </OverlayTrigger>
                  </div>
                </div>
                <div className="card-text">{destinasi.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
