import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdDelete } from "react-icons/md";
import AirplaneDelete from "./img/Airplane404.svg";
import "./DeleteConfirmation.scss";

function DeleteConfirmation(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Button onClick={handleShow}>
          <MdDelete />
        </Button>
        <Modal
          className="delete-confirmation"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <img className="img-delete-confirm" src={AirplaneDelete} alt="" />
          <Modal.Body className="text-center mb-2">
            <div className="fw-bolder">Menghapus Data Ini?</div>
            <div className="fw-light">
              Setelah dihapus, data tersebut tidak dapat dikembalikan.
              <br /> Yakin ingin menghapus?
            </div>
            <div className="mt-3 mx-5">
              <Button variant="danger" onClick={props.onClick}>
                <span onClick={handleClose}>Hapus</span>
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Batal
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default DeleteConfirmation;
