import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Container, Alert } from "react-bootstrap";
import { getTransactions } from "../../../store/actions/transactions";
import Loading from "../../UIComponents/Loading";

const DataTransaction = () => {
  const { loading, data, errorMessage, message, } = useSelector(
    (state) => state.transactionsReducer
  );
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
  console.log(data)
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
            <th>Jumlah Penumpang</th>
            <th>Jenis Perjalanan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
        {data &&
          data?.map((transaction) => (
            <tr key={transaction.id}>
              <td>{i++}</td>
              <td>{transaction.User.username}</td>
              <td>{transaction.paymentId ? transaction.Payment.bankName: "-"}</td>
              <td>{transaction.paymentId ? transaction.Payment.accountNumber: "-"}</td>
              <td>{transaction.orderId.length}</td>
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