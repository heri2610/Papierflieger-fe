import React from 'react';
import {
  Container,
  Form,
  Row,
  Col
} from 'react-bootstrap';
import profile_picture from '../../../assets/images/profile_picture.svg';

const FormEditProfile = () => {
  return (
    <div className="form-edit">
      <Container className="mt-5">
        <Form>
        <Row>
          <h3>Halaman Profil</h3>
          <br/>
          <br/>
          <Col>
          <img src={profile_picture} alt="" width="150" height="150" />
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Foto Profil</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>NAMA LENGKAP</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nama Lengkap"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>TANGGAL LAHIR</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="yy/mm/dd"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control
              require 
              type="password" 
              placeholder="Password" 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>KEBANGSAAN</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Kebangsaan"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>PROVINSI</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Provinsi"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>NOMOR TELEPON</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nama Pengguna"
            />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>NAMA PENGGUNA</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nama Pengguna"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>EMAIL</Form.Label>
            <Form.Control
              require
              type="email" 
              placeholder="Enter email" 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>KONFIRMASI PASSWORD</Form.Label>
            <Form.Control
              require 
              type="password" 
              placeholder="Password" 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Negara</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Negara"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>KABUPATEN/KOTA</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Kabupaten/Kota"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>GELAR</Form.Label>
            <Form.Select aria-label="Default select example">
                <option value="1">Mr</option>
                <option value="2">Ms</option>
            </Form.Select>
          </Form.Group>
          </Col>
        </Row>
        </Form>
      </Container>
    </div>
  )
}

export default FormEditProfile