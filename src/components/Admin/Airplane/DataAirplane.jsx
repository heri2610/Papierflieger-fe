/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Table, Alert } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import "./DataAirplane.scss";
import { Link, useLocation } from "react-router-dom";
import { getAirplane } from "../../../store/actions/airplane";

const DataAirplane = () => {
  const { state } = useLocation();
  const { loading, data, errorMessage, message } = useSelector((state) => state.airplaneReducer);
  const [messages, setMessages] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAirplane());
  }, [dispatch]);

  useEffect(() => {
    if (state) {
      console.log(state);
      setMessages(state.message);
      window.setTimeout(() => {
        setMessages("");
      }, 2000);
    }
  }, []);
  // console.log(loading);
  // console.log(data);
  // console.log(errorMessage);
  return (
    <div className="data-airplane">
      <Container>
        <Link to="/admin/airplane/new" style={{ textDecoration: "none" }}>
          <Button className="btn-primary mb-3" type="submit" value="Submit">
            Tambahkan data pesawat
          </Button>
        </Link>
        {messages && (
          <Alert key="primary" variant="primary">
            <>{messages}</>
          </Alert>
        )}
        {/* {message && (
          <Alert key="primary" variant="primary">
            {message}
          </Alert>
        )} */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nama Pesawat</th>
              <th>Kode Pesawat</th>
              <th>Kelas</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((airplane) => (
              <tr key={airplane.id}>
                <td>{airplane.airplaneName}</td>
                <td>{airplane.airplaneCode}</td>
                <td>{airplane.class}</td>
                <td>
                  <Link to="/admin/airplane/edit" style={{ textDecoration: "none" }}>
                    <Button>
                      <FiEdit />
                    </Button>
                  </Link>
                  <Button className="delete">
                    <MdDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default DataAirplane;
