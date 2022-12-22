import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { getDestinasi } from "../../../store/actions/destinasi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Slider.scss";

// import required modules
import { Pagination, Navigation } from "swiper";

const Slider = () => {
  const { data } = useSelector((state) => state.destinasiReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDestinasi());
  }, [dispatch]);
  console.log(data);
  return (
    <div className="container">
      <div className="slider">
        <h2 className="font-title mt-0" id="destinasi">
          DESTINASI
        </h2>
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {data &&
            data?.map((destinasi) => (
              <SwiperSlide>
                <Link>
                  <div className="template">
                    <div className="box">
                      <div className="box-image">
                        <img src={destinasi.image[0]} alt="" />
                      </div>
                      <ul className="title">
                        <li>
                          <button>
                            <p>{destinasi.location}</p>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
