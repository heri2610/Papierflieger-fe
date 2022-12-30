import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Table,
  Alert
} from "react-bootstrap";
import { getOrders } from "../../../store/actions/order";
import Loading from "../../UIComponents/Loading";

const DataOrder = () => {
  const { loading, data, errorMessage, message } = useSelector(
    (state) => state.orderReducer
  );
  console.log(data);
  const [messages, setMessages] = useState("");
  const [eror, setEror] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  useEffect(() => {
    if (errorMessage) {
      setEror(errorMessage);
      window.setTimeout(() => {
        setMessages("");
      }, 3000);
    }
    if (message) {
      setMessages(message);
      window.setTimeout(() => {
        setMessages("");
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  let i = 1;
  return (
    <div className="data-order">
      <Container>
        {messages && (
          <Alert key="primary" variant="primary">
            <>{message}</>
          </Alert>
        )}
        {eror && (
          <Alert key="danger" variant="danger">
            {eror}
          </Alert>
        )}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Penumpang</th>
              <th>Tanggal Lahir</th>
              <th>Kebangsaan</th>
              <th>Nomor Pasport/NIK</th>
              <th>Negara Penerbit Pasport</th>
              <th>Masa Akhir Berlaku</th>
              <th>Tiket id</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((pesanan) => (
                <tr key={pesanan.id}>
                  <td>{i++}</td>
                  <td>{pesanan.passengerName}</td>
                  <td>{pesanan.birthDate.split("T")[0]}</td>
                  <td>{pesanan.nationality}</td>
                  <td>{pesanan.passportNumber || pesanan.NIK}</td>
                  <td>{pesanan.issuingCountry || "-"}</td>
                  <td>{pesanan.expired ? pesanan.expired.split("T")[0] : "-"}</td>
                  <td>{pesanan.ticketId.length >= 1 ? pesanan.ticketId[0] : `${pesanan.ticketId[0]}, ${pesanan.ticketId[1]}`}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        {loading && (
          <div className="loading-center">
            <Loading />
          </div>
        )}
      </Container>
    </div>
  );
};

export default DataOrder;