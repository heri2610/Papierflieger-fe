import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { seeNotif } from "../../store/actions/notifications";

const Notification = ({ data }) => {
  const date = new Date(data.updatedAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  const dispatch = useDispatch();
  const humanReadableDate = date.toLocaleDateString('id-ID', options);
  useEffect(()=>setTimeout(()=>dispatch(seeNotif()),700))
  return (
    <div className="notification mb-3">
        <div className="box-card">
            <Container>
                <Card body className={data.read === false ? 'bg-info' : 'bg-white'}>
                  <h4>{data.name}</h4>
                  {data.message}<span className='float-end'>{humanReadableDate}</span></Card>
            </Container>
        </div>
    </div>
  );
};

export default Notification;