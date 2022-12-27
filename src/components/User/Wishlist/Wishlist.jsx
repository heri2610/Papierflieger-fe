import React, { useEffect, useState, } from "react";
import { Alert, OverlayTrigger, Tooltip } from "react-bootstrap";
import { BsFillBookmarkXFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteWishlist, getWishlist } from "../../../store/actions/wishlist";
import { useNavigate } from "react-router-dom";

import Loading from "../../../components/UIComponents/Loading";
import Slider from "../Slider/Slider";
import "./Wishlist.scss";

const Wishlist = () => {
  const { loading, data, message } = useSelector((state) => state.wishlistReducer);
  const history = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const [messages, setMessages] = useState(false);

  useEffect(() => {
    if (message) {
      setMessages(message);
      setShow(true);
      window.setTimeout(() => {
        setShow(false);
        setMessages(false);
      }, 3000);
    }
  }, [message]);

  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  const handleClick = (destinasi) => {
    history("/destinasi", { state: { destinasi } });
  };

  const handleDelete = (id) => {
    dispatch(deleteWishlist(id));
  };

  return (
    <>
      {loading && (
        <div className="loading-center">
          {" "}
          <Loading />{" "}
        </div>
      )}
      <div className="img-banner wishlist">
        <div className="container">
          <h4 className="my-3 fw-bold">Daftar Keinginan</h4>
          {messages && show && (
            <Alert key="primary" variant="primary">
              <>{messages}</>
            </Alert>
          )}

          {data &&
            data?.map((wishlist) => (
              <div className="container card mb-3 w-100" key={wishlist.id}>
                <div className="card-body posistion-relative d-flex align-items-start align-items-md-center justify-content-between">
                  <div className="d-flex align-items-center flex-wrap" onClick={() => handleClick(wishlist.Destination)}>
                    <div className="me-4 p-lg-3 image-wishlist" >
                      <img className="img-fluid rounded" variant="top" src={wishlist.Destination.image[0]} alt="" />
                    </div>
                    <div className="mt-3 mt-md-0">
                      <p className="card-title fw-bold fs-5">{wishlist.Destination.name}</p>
                      <p className="card-text text-muted">{wishlist.Destination.location}</p>
                    </div>
                  </div>
                  <div className="position-absolute" style={{ right: "3%" }}>
                    <OverlayTrigger
                      key="bottom"
                      placement="bottom"
                      overlay={
                        <Tooltip id={`tooltip-bottom`}>
                          Hapus dari wishlist
                        </Tooltip>
                      }
                    >
                      <div className="icon-wishlist"
                        onClick={() => handleDelete(wishlist.destinationId)}
                      ><BsFillBookmarkXFill size="30px" /></div>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="my-5">
        <Slider />
      </div>
    </>
  );
};
export default Wishlist;
