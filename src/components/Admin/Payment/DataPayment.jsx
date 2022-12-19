import React from 'react';
import { Button, Table, Container} from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
// import './DataPayment.scss';
import { Link } from 'react-router-dom'

const DataPayment = () => {
  return (
    <div className='data-payment'>
      <Container>
      <Link to="/admin/payment/new" style={{textDecoration:"none"}}>
        <Button className='btn-primary mb-3' type="submit" value="Submit">Tambahkan metode pembayaran</Button>
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Bank</th>
              <th>Nama Akun</th>
              <th>Nomor Akun</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>BTPN</td>
              <td>PT Papierflieger</td>
              <td>91938247</td>
              <td>
                <Link to="/admin/payment/new" style={{textDecoration:"none"}}>
                  <Button><FiEdit/></Button>
                </Link>
                <Button className="delete"><MdDelete/></Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mandiri</td>
              <td>PT Papierflieger</td>
              <td>2345678</td>
              <td>
              <Link to="/admin/payment/new" style={{textDecoration:"none"}}>
                  <Button><FiEdit/></Button>
                </Link>
                <Button className="delete"><MdDelete/></Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>BJB</td>
              <td>PT Papierflieger</td>
              <td>1234567</td>
              <td>
                <Link to="/payment/new" style={{textDecoration:"none"}}>
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

export default DataPayment