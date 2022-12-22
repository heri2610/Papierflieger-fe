import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/Navbar/NavigationBar";
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { getProfile, updateProfile } from "../../store/actions/auth";

const Profile = () => {
  const { profile } = useSelector((state) => state.authReducer);
  console.log(profile);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const [isDisabled, setIsDisabled] = useState(true);

  const [username, setUsername] = useState(profile.username);
  const [fullName, setFullName] = useState(profile.fullName);
  const [birthdate, setBirthdate] = useState(profile.birthdate);
  const [avatar, setAvatar] = useState(profile.avatar);
  const [country, setCountry] = useState(profile.country);
  const [nationality, setNationality] = useState(profile.nationality);
  const [phone, setPhone] = useState(profile.phone);
  const [province, setProvince] = useState(profile.province);
  const [regency, setRegency] = useState(profile.regency);
  const [title, setTitle] = useState(profile.title);

  const data = {
    username,
    fullName,
    birthdate,
    avatar,
    country,
    nationality,
    phone,
    province,
    regency,
    title,
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(data);
    dispatch(updateProfile(data));
    setIsDisabled(true);
  };

  return (
    <>
      <NavigationBar />
      <div className="form-edit pt-5">
        <Container className="mt-5">
          {isDisabled ?
            <h3 className="mb-3">Halaman Profil</h3>
            :
            <h3 className="mb-3">Ubah Profil</h3>
          }
          <Form>
            <fieldset disabled={isDisabled}>
              <div className="d-flex flex-wrap">
                <div className="position-relative">
                  <div className="avatar mb-3 me-5 flex-shrink-0"
                    style={{ backgroundImage: `url(${avatar})` }}></div>
                  {!isDisabled &&
                    <Form.Group controlId="formFile" className="mb-3 upload-pp">
                      <Form.Label>Ubah Foto</Form.Label>
                      <Form.Control type="file" onChange={(event) => {
                        setAvatar(event.target.value);
                      }} />
                    </Form.Group>
                  }
                </div>
                <div className="flex-grow-1">
                  <Row className="row-cols-md-2 row-cols-1">
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>NAMA LENGKAP</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Nama Lengkap"
                          value={fullName}
                          onChange={(event) => {
                            setFullName(event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>TANGGAL LAHIR</Form.Label>
                        <Form.Control
                          required
                          type="date"
                          value={birthdate?.split("T")[0]}
                          onChange={(event) => {
                            setBirthdate(event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>KEBANGSAAN</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Kebangsaan"
                          value={nationality}
                          onChange={(event) => {
                            setNationality(event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>PROVINSI</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Provinsi"
                          value={province}
                          onChange={(event) => {
                            setProvince(event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>NOMOR TELEPON</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Nomor HP"
                          value={phone}
                          onChange={(event) => {
                            setPhone(event.target.value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>NAMA PENGGUNA</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Nama Pengguna"
                          value={username}
                          onChange={(event) => {
                            setUsername(event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control
                          readOnly
                          required
                          type="email"
                          placeholder="Enter email"
                          defaultValue={profile.email}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Negara</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Negara"
                          value={country}
                          onChange={(event) => {
                            setCountry(event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>KABUPATEN/KOTA</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Kabupaten/Kota"
                          value={regency}
                          onChange={(event) => {
                            setRegency(event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>SAPAAN</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          value={title}
                          onChange={(event) => {
                            setTitle(event.target.value);
                          }}
                        >
                          <option value="Mr">Bapak</option>
                          <option value="Mrs">Ibu</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </div>
            </fieldset>
          </Form>
          <div className="d-flex justify-content-end">
            {isDisabled === true ? (
              <Button className="btn-primary my-5" onClick={() => setIsDisabled(false)}>
                Edit Profil
              </Button>
            ) : (
              <Button className="btn-primary my-5" onClick={handleUpdate}>
                Simpan perubahan
              </Button>
            )}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Profile;