import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { BsFillBookmarkXFill } from "react-icons/bs";
import Slider from "../Slider/Slider";
import "./Wishlist.scss";

const Wishlist = () => {
  return (
    <>
      <div className="img-banner">
        <div className="container">
          <h4 className="my-3 fw-bold">Daftar Keinginan</h4>
          <div className="container card mb-3 w-100">
            <div className="card-body d-flex align-items-start align-items-md-center justify-content-between">
              <div className="d-flex align-items-center flex-wrap">
                <div className="col-md-6 me-4 p-lg-3">
                  <img className="img-fluid" variant="top" src="" alt="" />
                </div>
                <div className="mt-3 mt-md-0">
                  <p className="card-title fw-bold fs-5">Pura Ulun Danu Beratan</p>
                  <p className="card-text text-muted">Bali</p>
                </div>
              </div>
              <div>
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip id={`tooltip-bottom`}>
                      Hapus dari wishlist
                    </Tooltip>
                  }
                >
                  <div className="icon-wishlist"><BsFillBookmarkXFill size="30px" /></div>
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <div className="container card mb-3 w-100">
            <div className="card-body d-flex align-items-start align-items-md-center justify-content-between">
              <div className="d-flex align-items-center flex-wrap">
                <div className="col-md-6 me-4 p-lg-3">
                  <img className="img-fluid" variant="top" src="" alt="" />
                </div>
                <div className="mt-3 mt-md-0">
                  <p className="card-title fw-bold fs-5">Pura Ulun Danu Beratan</p>
                  <p className="card-text text-muted">Bali</p>
                </div>
              </div>
              <div>
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip id={`tooltip-bottom`}>
                      Hapus dari wishlist
                    </Tooltip>
                  }
                >
                  <div className="icon-wishlist"><BsFillBookmarkXFill size="30px" /></div>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <Slider />
      </div>
    </>
  );
};
export default Wishlist;
