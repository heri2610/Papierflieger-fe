import React from 'react';
import {
  Button,
  Table,
  Container
} from 'react-bootstrap';
import {
  MdDelete,
  MdRemoveRedEye
} from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
// import './DataTicket.scss';
import { Link } from 'react-router-dom'

const DataTicket = () => {
  return (
    <div className='data-ticket'>
      <Container>
        <Link to="/admin/ticket/new" style={{textDecoration:"none"}}>
          <Button className='btn-primary mb-3' type="submit" value="Submit">Tambahkan Tiket Perjalanan</Button>
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nomor Tiket</th>
              <th>Tanggal Keberangkatan</th>
              <th>Tanggal Kedatangan</th>
              <th>Penerbangan dari</th>
              <th>Penerbangan ke</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>67428601</td>
              <td>2022-12-14</td>
              <td>2022-12-14</td>
              <td>Jakarta</td>
              <td>Aceh</td>
              <td>
                <Button className="right"><MdRemoveRedEye/></Button>
                <Link to="/admin/ticket/new" style={{textDecoration:"none"}}>
                  <Button className="delete"><FiEdit/></Button>
                </Link>
                <Button className="delete"><MdDelete/></Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default DataTicket