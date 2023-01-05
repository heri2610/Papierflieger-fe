import React from "react";
import {Card, Form, Col, Button} from "react-bootstrap";
import "./Password.scss";

const Password = () => {
  return (
    <div className="password">
        <Card Body>
            <Form className="form-password">
                <Form.Group
                    as={Col}
                    className="form mb-3"
                    controlId="formGridPassword"
                >
                    <Form.Label>KATA SANDI LAMA</Form.Label>
                    <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    />
                </Form.Group>
                <Form.Group
                    as={Col}
                    className="form mb-3"
                    controlId="formGridPassword"
                >
                    <Form.Label>KATA SANDI BARU</Form.Label>
                    <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    />
                </Form.Group>
                <Form.Group
                    as={Col}
                    className="form mb-3"
                    controlId="formGridPassword"
                >
                    <Form.Label>KONFIRMASI KATA SANDI BARU</Form.Label>
                    <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    />
                </Form.Group>
                <div className="pass-button">
                    <Button className="btn-primary my-2">
                        Simpan perubahan
                    </Button>
                </div>
            </Form>
        </Card>
    </div>
  )
}

export default Password