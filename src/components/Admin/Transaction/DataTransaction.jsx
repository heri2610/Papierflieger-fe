import React from "react";
// import "./DataTransaction.scss";
import {Table , Container } from "react-bootstrap";

const DataTransaction = () => {
  return (
    <div className="data-transaction">
      <Container>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Pengguna</th>
            <th>Metode Pembayaran</th>
            <th>Nomor Rekening</th>
            <th>Id Pemesanan</th>
            <th>Jenis Perjalanan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Desi</td>
            <td>BCA</td>
            <td>91938247</td>
            <td>2, 4</td>
            <td>One-Way</td>
            <td>600000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Wina</td>
            <td>BRI</td>
            <td>91938247</td>
            <td>3, 5</td>
            <td>One-Way</td>
            <td>600000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Uti</td>
            <td>Mandiri</td>
            <td>91938247</td>
            <td>6, 9</td>
            <td>One-Way</td>
            <td>600000</td>
          </tr>
        </tbody>
      </Table>
    </Container>
    </div>
  )
}

export default DataTransaction