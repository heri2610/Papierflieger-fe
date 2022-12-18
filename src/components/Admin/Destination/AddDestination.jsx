import React from 'react';
import {Form, Container, Button } from 'react-bootstrap'

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
            <Form.Group className="form" controlId="validationCustom01">
            <Form.Label>Lokasi</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="1">Aceh</option>
                <option value="2">Bali</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="form" controlId="validationCustom01">
            <Form.Label>Id Bandara</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="1">1</option>
                <option value="2">2</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <br/>
            <div className="button">
              <Button variant="primary" type="submit">
                Tambahkan
              </Button>
            </div>
          </Container>
        </Form>
    </div>
  )
}

export default AddDestination