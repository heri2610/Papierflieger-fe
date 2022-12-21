import React from "react";
import {Button, Container, Table} from "react-bootstrap";
import { MdRemoveRedEye } from "react-icons/md";
// import "./DataUsers.scss";

const DataUser = () => {
  return (
    <div className="data-users">
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Lengkap</th>
              <th>Nama Pengguna</th>
              <th>Email</th>
              <th>Password</th>
              <th>Nomor Telepon</th>
              <th>Ulang Tahun</th>
              <th>Kewarganegaraan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Suhaeri</td>
              <td>hetotheri</td>
              <td>haerisuh@gmail.com</td>
              <td>heri1234</td>
              <td>0813000000</td>
              <td>20002-09-11</td>
              <td>Indonesia</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default DataUser