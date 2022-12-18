import React from 'react';
import {Form, Container, Button} from 'react-bootstrap';
import './DataAirport.scss';

const AddAirport = () => {
  return (
      <div className="add-airport">
      <div className="container-airport">
        <Form>
          <Container>
            <Form.Group className="form" controlId="validationCustom01">
              <Form.Label>Nama Bandara</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ngurah Rai International Airport"
              />
            </Form.Group>
            <Form.Group className="form" controlId="validationCustom01">
              <Form.Label>Wilayah</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Denpasar, Bali, Indonesia"
              />
            </Form.Group>
            <Form.Group className="form" controlId="validationCustom01">
              <Form.Label>Kode Bandara</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="DPS"
              />
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
    </div>
  )
}

export default AddAirport