import React from "react";

export default function SearchTicket() {
  return (
    <>
      <div
        className="row justify-content-md-center position-relative"
        style={{ bottom: "6rem" }}
      >
        <div className="col-8 card">
          <div className="card-body">
            <h4>Pemesanan Tiket</h4>
            <div className="row row-cols-4 mb-3">
              <div className="col">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>Jakarta (CGK)</option>
                    <option value="1">Sydney</option>
                    <option value="2">Tokyo</option>
                    <option value="3">Jeddah</option>
                  </select>
                  <label for="floatingSelect">Dari</label>
                </div>
              </div>
              <div className="col">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>Singapura (SIN)</option>
                    <option value="1">Sydney</option>
                    <option value="2">Tokyo</option>
                    <option value="3">Jeddah</option>
                  </select>
                  <label for="floatingSelect">Ke</label>
                </div>
              </div>
              <div className="col">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Penumpang</label>
                </div>
              </div>
              <div className="col">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>One-Way</option>
                    <option value="1">Round-trip</option>
                  </select>
                  <label for="floatingSelect">Keberengkatan</label>
                </div>
              </div>
            </div>
            <div className="row row-cols-4 mb-3">
              <div className="col">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>Ekonomi</option>
                    <option value="1">Bisnis</option>
                  </select>
                  <label for="floatingSelect">Kelas</label>
                </div>
              </div>
              <div className="col">
                <div class="form-floating mb-3">
                  <input
                    type="date"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Pergi</label>
                </div>
              </div>
              <div className="col">
                <div class="form-floating mb-3">
                  <input
                    type="date"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Pulang</label>
                </div>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-primary w-100 h-75">
                  Cari Penerbangan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-12">
        <div className="col"></div>
      </div>
    </>
  );
}
