import React from "react";
import FormSearch from "./FormSearch";

import "./searchTicket.scss";

export default function SearchTicket() {
  return (
    <>
      <div className="search-ticket-real">
        <div className="form-search d-flex justify-content-center position-relative">
          <div className="col-md-8 col-9 card">
            <div className="card-body">
              <h4 className="mb-3">Pencarian Tiket</h4>
              <FormSearch />
            </div>
          </div>
        </div>
        <div className="row row-cols-12">
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
