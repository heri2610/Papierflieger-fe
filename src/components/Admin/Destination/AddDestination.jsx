import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Form, Container, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDestinasi } from "../../../store/actions/destinasi";
import { SelectBandara, SelectLokasi } from '../../UIComponents/Select';
import { getAirport } from '../../../store/actions/airport';

const AddDestination = () => {
  const { data } = useSelector((state) => state.airportReducer);
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
    dispatch(getAirport());
  }, [dispatch]);

  const [name, setName] = useState("");
  const [location, setLocation] = useState({});
  const [images, setImages] = useState([]);
  const [airportId, setAirportId] = useState({});
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataSubmit = {
      name,
      location,
      airportId,
      description,
    };
    const formData = new FormData();
    for (const key in dataSubmit) {
      formData.append(key, dataSubmit[key]);
    }
    Array.from(images).forEach(photo => {
      formData.append('images', photo);
    });

    dispatch(addDestinasi(formData, history));
  };

  return (
    <div className="add-destination">
      <Form className="add" onSubmit={handleSubmit}>
        <Container>
          <Form.Group className="form" controlId="validationCustom01">
            <Form.Label>Nama Destinasi</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Pura Ulun Danu Beratan"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Gambar</Form.Label>
            <Form.Control
              required
              type="file"
              multiple
              onChange={(e) => {
                setImages(e.target.files);
              }}
            />
          </Form.Group>
          <Form.Group className="form mt-2" controlId="validationCustom01">
            <Form.Label>Lokasi</Form.Label>
            <SelectLokasi
              options={data}
              onChange={(e) => setLocation(e.value)}
            />
          </Form.Group>
          <Form.Group className="form mt-2" controlId="validationCustom01">
            <Form.Label>Bandara</Form.Label>
            <SelectBandara
              options={data}
              onChange={(e) => setAirportId(e.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              as="textarea"
              rows={3} onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <br />
          <div className="edit-delete">
            <Button type="submit">
              Tambahkan
            </Button>
          </div>
        </Container>
      </Form>
    </div>
  );
};

export default AddDestination;