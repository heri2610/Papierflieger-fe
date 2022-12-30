import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Container, Alert } from "react-bootstrap";
import { getTransactions } from "../../../store/actions/transactions";
import Loading from "../../UIComponents/Loading";

const DataTransaction = () => {
  const { loading, data, errorMessage, message } = useSelector(
    (state) => state.transactionsReducer
  );
  console.log(data);
  const [messages, setMessages] = useState("");
  const [eror, setEror] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
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
    <div className="data-transaction">
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
              <th>Nama Pengguna</th>
              <th>Metode Pembayaran</th>
              <th>Nomor Rekening</th>
              <th>Id Pemesanan</th>
              <th>Jenis Perjalanan</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{i++}</td>
                  <td>Desi</td>
                  <td>BCA</td>
                  <td>91938247</td>
                  <td>{transaction.orderId.map((order) => (
                    `${order}   `
                  ))} </td>
                  <td>{transaction.trip}</td>
                  <td>{transaction.totalPrice}</td>
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

export default DataTransaction;