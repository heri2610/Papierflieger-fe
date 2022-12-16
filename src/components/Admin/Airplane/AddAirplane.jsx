import React from 'react';
import { Container, Form, Button} from 'react-bootstrap';
import './DataAirplane.scss';

const AddAirplane = () => {
  return (
    <div className="add-airplane">
      <div className="container-airplane">
        <Form>
          <Container>
            <Form.Group className="form mb-3" controlId="validationCustom01">
              <Form.Label>Nama Pesawat</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Boeing 737-800"
              />
            </Form.Group>
            <Form.Group className="form mb-3" controlId="validationCustom01">
              <Form.Label>Kode Pesawat</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="AF12345"
              />
            </Form.Group>
            <Form.Group className="form mb-3" controlId="validationCustom01">
            <Form.Label>Kelas</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="1">Bisnis</option>
                <option value="2">Ekonomi 1</option>
                <option value="3">Ekonomi 2</option>
              </Form.Select>
            </Form.Group>
            <br/>
            <div className="add-airplane">
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

export default AddAirplane