import React from 'react';
import {Form, Container, Button } from 'react-bootstrap';
import Select from 'react-select'

const lokasi = [
  {value: "Aceh", label: "Aceh"},
  {value: "Bali", label: "Bali"}
]

const idBandara = [
  {value: "1", label: "1"},
  {value: "2", label: "2"},
  {value: "3", label: "3"},
]

const AddDestination = () => {
  return (
    <div className="add-destination">
        <Form>
          <Container>
            <Form.Group className="form" controlId="validationCustom01">
              <Form.Label>Nama Destinasi</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Pura Ulun Danu Beratan"
              />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Gambar</Form.Label>
                <Form.Control require type="file" multiple />
            </Form.Group>
            <Form.Group className="form mt-2" controlId="validationCustom01">
              <Form.Label>Lokasi</Form.Label>
              <Select options={lokasi}/>
            </Form.Group>
            <Form.Group className="form mt-2" controlId="validationCustom01">
            <Form.Label>Id Bandara</Form.Label>
              <Select options={idBandara}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <br/>
            <div className="button-destination">
              <Button type="submit">
                Tambahkan
              </Button>
            </div>
          </Container>
        </Form>
    </div>
  )
}

export default AddDestination