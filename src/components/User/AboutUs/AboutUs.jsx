import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Heri from "../../../assets/images/Heri.svg";
import { getAboutUs } from "../../../store/actions/additionals";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const AboutUs = () => {
  const { loading, data, errorMessage } = useSelector((state) => state.aboutUsReducer); 
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAboutUs());
    }, [dispatch]); 
    console.log(data)
  return (
    <div className="container-fluid mt-5 pb-5 bg-babyblue" id="aboutus">
      <div className="container">
        <h3 className="font-title pt-5">TENTANG KAMI</h3>
        <Swiper
          slidesPerView={2}
          spaceBetween={16}
          loop={false}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 36,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          className="mySwiper"
        >
          {data?.map((dataTim) => (
            <SwiperSlide>
              <div className="card">
                <div className="card-body d-flex align-items-center flex-column">
                  <img className="img-circle w-75" src={dataTim.avatar} alt="Heri" />
                  <h6 className="mt-3">{dataTim.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Muel</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Bregi</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Sri</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Ican</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Izzu</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Nawfal</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Gevin</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Azra</h6>
              </div>
            </div>
          </SwiperSlide>*/}
        </Swiper>
        {/* <div className="row row-cols-3 row-cols-lg-5 justify-content-center text-center g-4 mt-2">
          <div className="col">
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Suhaeri</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Suhaeri</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Suhaeri</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Suhaeri</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Suhaeri</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Suhaeri</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Suhaeri</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Suhaeri</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body d-flex align-items-center flex-column">
                <img className="img-circle w-75" src={Heri} alt="Heri" />
                <h6 className="mt-3">Suhaeri</h6>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default AboutUs;
