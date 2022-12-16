import React from 'react';
import {Button, Container, Table} from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import {FiEdit} from 'react-icons/fi';
import './DataAirplane.scss'
import {Link} from 'react-router-dom'

const DataAirplane = () => {
  return (
    <div className='data-airplane'>
      <Container>
      <Link to="/airplane/new" style={{textDecoration:"none"}}>
        <Button className='btn-primary mb-3' type="submit" value="Submit">Tambahkan data pesawat</Button>
      </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nama Pesawat</th>
              <th>Kode Pesawat</th>
              <th>Kelas</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Boeing G7792</td>
              <td>AP-345</td>
              <td>Business</td>
              <td>
                <Link to="/admin/airplane/new" style={{textDecoration:"none"}}>
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

export default DataAirplane