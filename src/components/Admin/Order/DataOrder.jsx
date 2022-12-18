import React from 'react';
import {
  Container, 
  Table
} from 'react-bootstrap';
// import './DataOrder.scss'

const DataOrder = () => {
  return (
    <div className='data-order'>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Penumpang</th>
              <th>Tanggal Lahir</th>
              <th>Kursi</th>
              <th>Gerbang</th>
              <th>Kebangsaan</th>
              <th>Nomor Pasport/NIK</th>
              <th>Negara Penerbit Pasport</th>
              <th>Masa Akhir Berlaku</th>
              <th>Tiket id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mika Tahinakiwi</td>
              <td>2000-03-11</td>
              <td>18A</td>
              <td>3</td>
              <td>Indonesia</td>
              <td>79326729</td>
              <td>Indonesia</td>
              <td>2025-01-22</td>
              <td>3</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default DataOrder