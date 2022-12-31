import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table, Alert} from "react-bootstrap";
// import { MdRemoveRedEye } from "react-icons/md";
// import "./DataUsers.scss";
import { getUsers, addAdmin } from "../../../store/actions/users";
import Loading from "../../UIComponents/Loading";

const DataUser = () => {
  const { loading, data, errorMessage, message } = useSelector(
    (state) => state.usersReducer
  );
  const [messages, setMessages] = useState("");
  const [eror, setEror] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
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
  let i = 1

  const handleAddAdmin = (id)=>{
    // console.log(id)
    dispatch(addAdmin(id));
  }
  return (
    <div className="data-users">
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
              <th>Nama Lengkap</th>
              <th>Nama Pengguna</th>
              <th>Email</th>
              <th>Nomor Telepon</th>
              <th>Tanggal Lahir</th>
              <th>Kewarganegaraan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
          {data &&
              data?.map((user)=>(
              <tr key={user.id}>
                <td>{i++}</td>
                <td>{user.fullName}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{ user.phone }</td>
                <td>{new Date(user.birthdate).toISOString().substring(0, 10)}</td>
                <td>{user.nationality}</td>
                <td>{user.role === "Admin" ? "Admin" : <button className="btn btn-primary fs-6" onClick={()=>handleAddAdmin(user.id)}>Jadikan Admin</button>}</td>
              </tr>
         ))
           } 
          </tbody>
        </Table>
        {loading && (
          <div className="loading-center">
            <Loading />
          </div>
        )}
      </Container>
    </div>
  )
}

export default DataUser