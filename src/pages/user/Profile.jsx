import React from 'react';
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/Navbar/NavigationBar";
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { detailProfile } from '../../store/actions/auth';
// import FormProfile from '../../components/User/FormProfile/FormProfile';

const Profile = () => {
  // const { data } = useSelector((state) => state.authReducer);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(detailProfile());
  // }, [dispatch]);

  return (
    <>
      <NavigationBar />
      <div className="form-edit pt-5">
        <Container className="mt-5">
          <h3 className="mb-3">Halaman Profil</h3>
          {/* {data &&
            data?.map((user) => ( */}
          <Form>
            <div className="d-flex flex-wrap">
              <div className="avatar mb-3 me-5" style={{ backgroundImage: `url(${window.localStorage.getItem("avatar")})` }}></div>
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
                      // value={user.fullName}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>TANGGAL LAHIR</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="date"
                      // value={user.birthdate}
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
                      // value={user.nationality}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>PROVINSI</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="text"
                        placeholder="Provinsi"
                      // value={user.province}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>NOMOR TELEPON</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="text"
                        placeholder="Nomor HP"
                      // value={user.phone}
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
                      // value={user.username}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>EMAIL</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="email"
                        placeholder="Enter email"
                      // value={user.email}
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
                      // value={user.country}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>KABUPATEN/KOTA</Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="text"
                        placeholder="Kabupaten/Kota"
                      // value={user.regency}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>SAPAAN</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        // value={user.title} 
                        disabled>
                        <option value="Mr.">Bapak</option>
                        <option value="Mrs.">Ibu</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            </div>
          </Form>
          {/* ))} */}
          <div className="d-flex justify-content-end">
            <Link to="/user/profile/edit">
              <Button className="btn-primary my-5">
                Edit Profil
              </Button>
            </Link>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Profile;