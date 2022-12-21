import React from 'react';
import { Container, Card } from "react-bootstrap";
import "./Checkin.scss"

const CardCheckin = () => {
  return (
    <div className="template-card">
        <Container>
            <Card body>
                <h5>Syarat dan Ketentuan Check In Online</h5>
                <li>Check In hanya dapat dilakukan 2,5 jam sebelum waktu keberangkatan</li>
                <li>Penumpang tidak dapat melakukan perubahan data diri saat check in</li>
                <li>Penumpang diharuskan sudah berada di ruang tunggu bandara 40 menit sebelum keberangkatan</li>
            </Card>
        </Container>
    </div>
  )
}

export default CardCheckin