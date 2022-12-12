import React from "react";
import { Container,Row,Col, Form,Button } from "react-bootstrap";
import DetailPenerbangan from "./DetailPenerbangan";
import "./Penerbangan.scss";

function Penerbangan(){
    return <>
    <Container fluid className='section--form pt-5'>
        <Row className='pt-5'>
            <Col>
            <Form.Group className='mb-3'>
                <Form.Label>Dari</Form.Label>
                <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
                </Form.Group>
                </Col>
                <Col>
            <Form.Group className='mb-3'>
                <Form.Label>Ke</Form.Label>
                <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
                </Form.Group>
                </Col>
                <Col>
            <Form.Group className='mb-3'>
                <Form.Label>Penumpang</Form.Label>
                <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
                </Form.Group>
                </Col>
                <Col>
            <Form.Group className='mb-3'>
                <Form.Label>Keberangkatan</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                </Col>
        </Row>

        <Row className='pt-1 pb-3'>
            <Col>
            <Form.Group className='mb-3'>
                <Form.Label>Kelas</Form.Label>
                <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
                </Form.Group>
                </Col>
                <Col>
            <Form.Group className='mb-3'>
                <Form.Label>Keberangkatan</Form.Label>
                <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
                </Form.Group>
                </Col>
                <Col>
            <Form.Group className='mb-3'>
                <Form.Label>Kepulangan</Form.Label>
                <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className='mb-3'>
                <Form.Label className='d-block' style={{visibility:'hidden'}}>Kepulangan</Form.Label>
                <Button variant='primary' className='w-100'>Cari Penerbangan</Button>
                </Form.Group>
                </Col>
        </Row>
    </Container>
    <Container fluid className='section--body pt-4 pb-4'>
        <Row>
            <Col md='3'>
                <div className='bg-white m-2 p-3 rounded'>
                    <h4>Filter Berdasarkan</h4>
                <Form.Group className='border-top border-dark mb-4'>
                <Form.Label className='mt-2'>Jumlah Perhentian</Form.Label>
                <Form.Check 
            type='radio' label='Apapun' name='perhentian'
          />
          <Form.Check 
            type='radio' label='Langsung' name='perhentian'
          />
          <Form.Check 
            type='radio' label='Transit' name='perhentian'
          />
    </Form.Group>
    <Form.Group className='border-top border-dark mb-4'>
                <Form.Label className='mt-2'>Durasi Terbang</Form.Label>
          <Form.Check 
            type='radio' label='Tercepat' name='durasipenerbangan'
          />
          <Form.Check 
            type='radio' label='Dini Hari' name='durasipenerbangan'
          />
    </Form.Group>
    <Form.Group className='border-top border-dark'>
                <Form.Label className='mt-2'>Harga</Form.Label>
          <Form.Check 
            type='radio' label='Termurah' name='harga'
          />
          <Form.Check 
            type='radio' label='Termahal' name='harga'
          />
    </Form.Group>
                </div>
            </Col>
            <Col md='9'>
            <h3>Pilihan Penerbangan</h3>
            <div className='bg-white p-3 rounded'>
                <DetailPenerbangan />
                </div>
            </Col>
        </Row>
    </Container>
    </>
}

export default Penerbangan;