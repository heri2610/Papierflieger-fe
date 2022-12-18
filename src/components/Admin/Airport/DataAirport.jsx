import React from 'react';
import {
  Button, 
  Container, 
  Table
} from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import './DataAirport.scss';
import { Link } from 'react-router-dom';

const DataAirport = () => {
  return (
    <div className='data-airport'>
      <Container>
      <Link to="/admin/airport/new" style={{textDecoration:"none"}}>
        <Button className='btn-primary mb-3' type="submit" value="Submit">Tambahkan data bandara</Button>
      </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
            <th>No</th>
              <th>Nama Bandara</th>
              <th>Kota</th>
              <th>Kode Bandara</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ngurah Rai International Airport</td>
              <td>Denpasar, Bali, Indonesia</td>
              <td>DPS</td>
              <td>
                <Link to="/admin/airport/new" style={{textDecoration:"none"}}>
                  <Button><FiEdit/></Button>
                </Link>
                <Button className="delete"><MdDelete/></Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ngurah Rai International Airport</td>
              <td>Denpasar, Bali, Indonesia</td>
              <td>DPS</td>
              <td>
                <Link to="/admin/airplane/new" style={{textDecoration:"none"}}>
                  <Button><FiEdit/></Button>
                </Link>
                <Button className="delete"><MdDelete/></Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ngurah Rai International Airport</td>
              <td>Denpasar, Bali, Indonesia</td>
              <td>DPS</td>
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

export default DataAirport