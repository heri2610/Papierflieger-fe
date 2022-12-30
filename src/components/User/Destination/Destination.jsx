import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import "./destination.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Alert, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addWishlist,
  getWishlist,
  deleteWishlist,
} from "../../../store/actions/wishlist";

const Destination = () => {
  const { message, errorMessage, data } = useSelector(
    (state) => state.wishlistReducer
  );
  const { state } = useLocation();
  const destinasi = state.destinasi;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [remove, setRemove] = useState(false);
  let keyImg = 1;

  const [messages, setMessages] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      data.map((wislist) => {
        if (wislist.Destination.id === destinasi.id) {
          return setRemove(true);
        }
        return false;
      });
    }
  }, [data, destinasi.id]);
  useEffect(() => {
    if (errorMessage) {
      setError(errorMessage);
      setShow(true);
      window.setTimeout(() => {
        setShow(false);
        setMessages(false);
      }, 3000);
    }
    if (message) {
      setMessages(message);
      setShow(true);
      window.setTimeout(() => {
        setShow(false);
        setMessages(false);
      }, 3000);
    }
  }, [message, errorMessage]);

  const datas = {
    destinationId: destinasi.id,
  };

  const addToWishlist = () => {
    dispatch(addWishlist(datas));
  };
  const handleDelete = (id) => {
    dispatch(deleteWishlist(id));
  };
  return (
    <div>
      {destinasi.image[0] && (
        <div className="container-fluid p-0 img-banner">
          <img
            className="first-img-destination mb-3 w-100 mb-3 w-100"
            src={destinasi.image[0]}
            alt=""
          />
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
            destinasi.image.map((img) => (
              <SwiperSlide key={keyImg++}>
                <div className="destination-img d-flex justify-content-center">
                  <img className="rounded-2" src={img} alt="" />
                </div>
              </SwiperSlide>
            ))}
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
                    <OverlayTrigger
                      key="bottom"
                      placement="bottom"
                      overlay={
                        <Tooltip id={`tooltip-bottom`}>
                          Tambah ke wishlist
                        </Tooltip>
                      }
                    >
                      {remove ? (
                        <div
                          className="icon-wishlist text-primary"
                          onClick={() => handleDelete()}
                        >
                          <BsFillBookmarkStarFill size="25px" />
                        </div>
                      ) : (
                        <div
                          className="icon-wishlist"
                          onClick={() => addToWishlist()}
                        >
                          <BsFillBookmarkStarFill size="25px" />
                        </div>
                      )}
                      {/* {!data &&  <div className="icon-wishlist" onClick={() => addToWishlist()}>
                        <BsFillBookmarkStarFill size="25px" />
                      </div>} */}
                    </OverlayTrigger>
                  </div>
                </div>
                <div className="card-text">{destinasi.description}</div>
              </div>
              {show && messages && (
                <Alert
                  key="primary"
                  variant="primary"
                  className="position-absolute mt-4"
                  style={{ left: "45%" }}
                >
                  <>{messages}</>
                </Alert>
              )}
              {show && error && (
                <Alert
                  key="danger"
                  variant="danger"
                  className="position-absolute mt-4"
                  style={{ left: "45%" }}
                >
                  <>{error}</>
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
