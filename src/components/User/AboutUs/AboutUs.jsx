import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAboutUs } from "../../../store/actions/additionals";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const AboutUs = () => {
  const { data } = useSelector((state) => state.aboutUsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAboutUs());
  }, [dispatch]);
  // console.log(data);
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
              <div className="card h-100">
                <div className="card-body d-flex align-items-center flex-column">
                  <img className="img-circle w-75" src={dataTim.avatar} alt={dataTim.name} />
                  <h6 className="mt-3 text-center">{dataTim.name}</h6>
                </div>
                <div class="card-footer text-center">
                  <small class="">{dataTim.bidang}</small>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default AboutUs;
