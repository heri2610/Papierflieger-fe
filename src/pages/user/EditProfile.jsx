import React from 'react';
// import FormEditProfile from '../../components/User/FormProfile/FormProfile';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/Navbar/NavigationBar";
import './Profile.scss';

const EditProfile = () => {
  return (
    <>
      <NavigationBar />
      <div className="edit-profile mt-3">
        <br />
        <div className="form-edit">
          <Container className="mt-5">
            <h3>Edit Profil</h3>
            <Form>
              <div className="d-flex flex-wrap">
                <div className="position-relative">
                  <div className="avatar mb-3 me-5 flex-shrink-0" style={{ backgroundImage: `url(${window.localStorage.getItem("avatar")})` }}></div>
                  <Form.Group controlId="formFile" className="mb-3 upload-pp">
                    <Form.Label>Ubah Foto</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </div>
                <div className="flex-grow-1">
                  <Row className="row-cols-md-2 row-cols-1">
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>NAMA LENGKAP</Form.Label>
                        <Form.Control required type="text" placeholder="Nama Lengkap" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>TANGGAL LAHIR</Form.Label>
                        <Form.Control
                          required
                          type="date"
                        // placeholder="yy/mm/dd"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>KEBANGSAAN</Form.Label>
                        <Form.Control required type="text" placeholder="Kebangsaan" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>PROVINSI</Form.Label>
                        <Form.Control required type="text" placeholder="Provinsi" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>NOMOR TELEPON</Form.Label>
                        <Form.Control required type="text" placeholder="Nomor HP" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>NAMA PENGGUNA</Form.Label>
                        <Form.Control required type="text" placeholder="Nama Pengguna" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>KONFIRMASI PASSWORD</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Negara</Form.Label>
                        <Form.Control required type="text" placeholder="Negara" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>KABUPATEN/KOTA</Form.Label>
                        <Form.Control required type="text" placeholder="Kabupaten/Kota" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>SAPAAN</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option value="1">Mr.</option>
                          <option value="2">Mrs.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <Button className="btn-primary my-5" type="submit" value="Submit">
                  Simpan
                </Button>
              </div>
            </Form>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;