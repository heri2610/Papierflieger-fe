/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Table, Alert } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import "./DataAirport.scss";
import { Link } from "react-router-dom";
import { getAirport, deleteAirport } from "../../../store/actions/airport";

const DataAirport = () => {
  const { data, errorMessage, message } = useSelector((state) => state.airportReducer);
  const [messages, setMessages] = useState("");
  const [eror, setEror] = useState("");
  const [edit, setEdit] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAirport());
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
    }, [data]);
    const handleDelete= (id)=>{
      dispatch(deleteAirport(id))
    };
  return (
    <div className="data-airport">
      <Container>
        <Link to="/admin/airport/new" style={{ textDecoration: "none" }}>
          <Button className="btn-primary mb-3" type="submit" value="Submit">
            Tambahkan data bandara
          </Button>
        </Link>
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
              {/* <th>No</th> */}
              <th>Nama Bandara</th>
              <th>Kota</th>
              <th>Kode Bandara</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((Airport) => (
                <tr key={Airport.id}>
                  {/* <td>1</td> */}
                  <td>{Airport.airportName}</td>
                  <td>{Airport.city}</td>
                  <td>{Airport.cityCode}</td>
                  <td>
                    <Link to="/admin/airport/new" style={{ textDecoration: "none" }}>
                      <Button>
                        <FiEdit />
                      </Button>
                    </Link>
                    <Button
                      className="delete"
                      onClick={() => {
                        handleDelete(Airport.id);
                      }}
                    >
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

export default DataAirport;
