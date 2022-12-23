import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Container, Alert } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import '../Admin.scss';
import { Link } from "react-router-dom";
import { getDestinasi, deleteDestinasi } from "../../../store/actions/destinasi";
import { getAirport } from "../../../store/actions/airport";

const DataDestination = () => {
  const { data, errorMessage, message } = useSelector((state) => state.destinasiReducer);
  const  dataAirport  = useSelector((state) => state.airportReducer.data);
  const [messages, setMessages] = useState("");
  const [eror, setEror] = useState("");
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [options, setOptions] = useState({})
  const [edit, setEdit] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDestinasi());
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
  const handledataEdit = (destinasi)=>{

  }
  const handleDelete = (id) => {
    dispatch(deleteDestinasi(id));
  };
  console.log(data)
  return (
    <div className="data-destination">
      <Container>
        <Link to="/admin/destination/new" style={{ textDecoration: "none" }}>
          <Button className="btn-primary mb-3" type="submit" value="Submit">
            Tambahkan data destinasi
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
              <th>Nama Destinasi</th>
              <th>Gambar</th>
              <th>Lokasi</th>
              <th>Bandara</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((destinasi) => (
              <tr key={destinasi.id}>
                <td>{destinasi.name}</td>
                <td>
                  <img src={destinasi.image[0]} alt={`gambar${destinasi.name}`} width="30px" />
                </td>
                <td>{destinasi.location}</td>
                <td>{destinasi.Airport.airportName}</td>
                <td>{destinasi.description}</td>
                <td>
                  <div className="edit-delete">
                    <Link onClick={()=>handledataEdit(destinasi)} style={{ textDecoration: "none" }}>
                      <Button>
                        <FiEdit />
                      </Button>
                    </Link>
                    <Button className="delete" onClick={() => handleDelete(destinasi.id)}>
                      <MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default DataDestination;
