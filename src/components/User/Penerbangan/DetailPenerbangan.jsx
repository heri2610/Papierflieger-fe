import React from "react";
import {Row,Col,Badge,Accordion,Button} from "react-bootstrap";
import Arrow from './Vector.svg';
import "./Penerbangan.scss";

export default function DetailPenerbangan({kelas, kode,harga,keberangkatan,pendaratan,durasi,istransit,transit}){
return <>
<Row>
    <Col md='2'>
    <h3>
    <Badge className='bg-info text-primary w-100'>Ekonomi</Badge>
      </h3>
    </Col>
    <Col>
    <h3>
    <Badge bg="info" className='text-primary'>Kode Pemesanan:APR22L</Badge>
      </h3>
    </Col>
    <Col>
    <h3 className='text-end m-0'>
    Rp. 2.678.000
      </h3><span className='text-end d-block'>/orang</span>
    </Col>
</Row>
<Row className="my-4 border-bottom border-dark pb-3">
    <Col className='position-relative'>
    <h4 className='m-0'>Keberangkatan</h4>
    <h1 className='m-0 p-0'>07.00</h1>
    <h4 className='m-0'>CGK</h4>
    <img src={Arrow} alt='arrow' className='position-absolute top-0 end-0 pt-1 pe-4' />
    </Col>
    <Col>
    <h4 className='m-0'>Pendaratan</h4>
    <h1 className='m-0 p-0'>15.00</h1>
    <h4 className='m-0'>SIN</h4>
    </Col>
    <Col>
    <h4 className='m-0'>Durasi Perjalanan</h4>
    <h1 className='m-0 p-0'>7 Jam</h1>
    </Col>
    <Col>
    <h4 className='m-0'>Lama Perhentian</h4>
    <h1 className='m-0 p-0'>1 Jam</h1>
    </Col>
</Row>
<Row>
    <Col>
    <Accordion>
        <Accordion.Item eventKey='0' className='border border-0'>
            <Accordion.Header><Button variant='primary' className="w-25"><h4 className='m-0'>Pesan</h4></Button><h4 className='d-inline ms-auto me-3 mb-0'>Pratinjau Rincian</h4></Accordion.Header>
            <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </Col>
</Row>
</>
}