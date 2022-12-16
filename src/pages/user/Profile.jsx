import React from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import FormProfile from '../../components/User/FormProfile/FormProfile';

const Profile = () => {
  return (
    <>
      <div className="form-edit pt-5">
        <Container className="mt-5">
          <h3 className="mb-3">Halaman Profil</h3>
          <Form>
            <div className="d-flex flex-wrap">
              <img src={window.localStorage.getItem("avatar")} alt="foto profil" width="150" height="150" className="mb-3 me-5 flex-shrink-0 rounded" />
              <div className="flex-grow-1">
                <Row className="row-cols-md-2 row-cols-1">
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>NAMA LENGKAP</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="text"
                        placeholder="Nama Lengkap"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>TANGGAL LAHIR</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="date"
                      // placeholder="yy/mm/dd"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>PASSWORD</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>KEBANGSAAN</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="text"
                        placeholder="Kebangsaan"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>PROVINSI</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="text"
                        placeholder="Provinsi"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>NOMOR TELEPON</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="text"
                        placeholder="Nomor HP"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>NAMA PENGGUNA</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="text"
                        placeholder="Nama Pengguna"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>EMAIL</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="email"
                        placeholder="Enter email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>KONFIRMASI PASSWORD</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Negara</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="text"
                        placeholder="Negara"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>KABUPATEN/KOTA</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="text"
                        placeholder="Kabupaten/Kota"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>SAPAAN</Form.Label>
                      <Form.Select aria-label="Default select example" disabled>
                        <option value="1">Mr.</option>
                        <option value="2">Mrs.</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            </div>
          </Form>

          <div className="d-flex justify-content-end">
            <Link to="/user/profile/edit">
              <Button className="btn-primary my-5">
                Edit Profil
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Profile;