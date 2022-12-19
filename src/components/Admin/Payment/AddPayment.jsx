import React from 'react';
import {Form, Container, Button} from 'react-bootstrap';

const AddPayment = () => {
  return (
    <div className="add-payment">
      <div className="container-payment">
        <Form>
          <Container>
            <Form.Group className="form" controlId="validationCustom01">
              <Form.Label>Nama Bank</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="BCA"
              />
            </Form.Group>
            <Form.Group className="form" controlId="validationCustom01">
              <Form.Label>Nama Akun</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="PT Papierflieger"
              />
            </Form.Group>
            <Form.Group className="form" controlId="validationCustom01">
              <Form.Label>Nomor Akun</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="392891280"
              />
            </Form.Group>
            <br/>
            <div className="button-payment">
              <Button type="submit">
                Tambahkan
              </Button>
            </div>
          </Container>
        </Form>
      </div>
    </div>
  )
}

export default AddPayment