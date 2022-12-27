import React from "react";
import { Container, Card } from "react-bootstrap";

const Notification = () => {
  return (
    <div className="notification mb-3">
        <div className="box-card">
            <Container>
                <Card body>Pembayaran tiket dengan id 12345678 melalui bank BTPN telah berhasil.</Card>
            </Container>
        </div>
    </div>
  )
}

export default Notification