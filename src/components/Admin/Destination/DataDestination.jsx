import React from 'react';
import { 
  Button, 
  Table, 
  Container
} from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import {FiEdit} from 'react-icons/fi';
// import './DataDestination.scss';
import { Link } from 'react-router-dom'

const DataDestination = () => {
  return (
    <div className='data-destination'>
      <Container>
      <Link to="/admin/destination/new" style={{textDecoration:"none"}}>
        <Button className='btn-primary mb-3' type="submit" value="Submit">Tambahkan data destinasi</Button>
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Destinasi</th>
              <th>Gambar</th>
              <th>Lokasi</th>
              <th>Id Bandara</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Putra Ulun Danu Beratan</td>
              <td>PT Papierflieger</td>
              <td>Bali</td>
              <td>1</td>
              <td>Pura Ulun Danu Beratan / Pura Penataran Agung Ulun Danu Beratan adalah salah satu dari sembilan Pura Khayangan Jagat yang mengelilingi Pulau Bali</td>
              <td>
                <Link to="/Admin/Destination/new" style={{textDecoration:"none"}}>
                  <Button><FiEdit/></Button>
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

export default DataDestination