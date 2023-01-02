import React from "react";
import { Container, Card } from "react-bootstrap";

const Notification = ({ data }) => {
  const date = new Date(data.updatedAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  const humanReadableDate = date.toLocaleDateString('id-ID', options);
  return (
    <div className="notification mb-3">
      <div className="box-card">
        <Container>
          <Card body className={data.read === false ? 'bg-info' : 'bg-light'}>
            <h4>{data.name}</h4>
            {data.message}<span className='float-end'>{humanReadableDate}</span></Card>
        </Container>
      </div>
    </div>
  );
};

export default Notification;