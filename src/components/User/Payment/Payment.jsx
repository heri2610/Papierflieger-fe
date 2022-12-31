import React, { useState } from "react";
import { Row, Col, Button, Container, Form, Collapse, Modal } from "react-bootstrap";
import logocard from "../../../assets/images/Logo-card.svg";
import Arrow from "../../../assets/images/Vector.svg";
import Footer from "../../Footer/Footer";
import NavigationBar from "../../Navbar/NavigationBar";
import { useSelector, useDispatch } from "react-redux";
import { proceedTransaction } from "../../../store/actions/order";
import { useNavigate } from "react-router-dom";
import "./payment.scss";
import Airplane404 from "../../UIComponents/img/Airplane404.svg";

function Payment() {
  const [open, setOpen] = useState(false);
  const [openz, setOpenz] = useState(false);
  const [opens, setOpens] = useState(false);
  const [opena, setOpena] = useState(false);
  const [banka, setBanka] = useState({ bankName: 'Bank BRI' });
  const [bankb, setBankb] = useState({ bankName: 'Bank BCA' });
  const [bankc, setBankc] = useState({ bankName: 'Bank Mandiri' });
  const [bankd, setBankd] = useState({ bankName: 'Bank BNI' });
  const { data } = useSelector((state) => state.orderReducer);
  const dispatch = useDispatch();
  const datez = new Date(data.tiketBerangkat[0].departureDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  const humanReadableDate = datez.toLocaleDateString('id-ID', options);
  console.log(data);
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  });
const navigate = useNavigate();
  const submit = (payload) => {
    console.log(payload);
    dispatch(proceedTransaction({ ...payload, tokenTransaction: data.tokenTransaction }
    ));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <NavigationBar />
      <Container fluid className="bg-info pb-5">
        <Container>
          <Row className="pt-5">
            <h3 className="mt-5 fw-bold">Tiket</h3>
            <Col className="bg-white p-3 mt-2 mb-4 rounded-4">
              <div className="d-flex align-items-center">
                <div className="w-25 me-2 d-flex justify-content-center">
                  <img src={logocard} className="img-fluid" alt="logo-card" />
                </div>
                <div className="ms-3 ms-md-0 tiket-bayar">
                  <h4>Penerbangan</h4>
                  <div className="hstack">
                    <h4><strong>{data.tiketBerangkat[0].from.city.split(',')[0]}</strong></h4>
                    <img src={Arrow} alt="arrow" className="mx-3" />
                    <h4><strong>{data.tiketBerangkat[0].to.city.split(',')[0]}</strong></h4>
                  </div>
                  <h4>{humanReadableDate}</h4>
                </div>
              </div>
            </Col>
            {data.tiketPulang &&
              <Col className="bg-white p-3 mt-2 mb-4 rounded-4">
                <div className="d-flex align-items-center">
                  <div className="w-25 me-2 d-flex justify-content-center">
                    <img src={logocard} className="img-fluid" alt="logo-card" />
                  </div>
                  <div className="ms-3 ms-md-0 tiket-bayar">
                    <h4>Pulang</h4>
                    <div className="hstack">
                      <h4><strong>{data.tiketPulang[0].from.city.split(',')[0]}</strong></h4>
                      <img src={Arrow} alt="arrow" className="mx-3" />
                      <h4><strong>{data.tiketPulang[0].to.city.split(',')[0]}</strong></h4>
                    </div>
                    <h4>{humanReadableDate}</h4>
                  </div>
                </div>
              </Col>}
          </Row>
          <Row className="mt-2">
            <h3 className="fw-bold">Detail Pembayaran</h3>
            <Col className="bg-white p-3 px-5 mt-2 mb-4 rounded-4">
              <div className="d-flex justify-content-between bayar">
                <div>
                  <p className="mb-2">Harga Tiket x{data.passengers}</p>
                  <p className="fw-semibold mb-0">Total Harga</p>
                </div>
                <div>
                  <p className="mb-2">{formatter.format(data.price)}</p>
                  <p className="fw-semibold mb-0">{formatter.format(data.totalPrice)}</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <h3 className="fw-bold">Metode Pembayaran</h3>
            <Col md={12} className="bg-white p-3 mt-2 mb-4 rounded-4">
              <Button variant="light" className="w-100 d-flex justify-content-between" onClick={() => setOpen(!open)}>
                <h4>Bank BRI</h4>
                <h3><i className="bi bi-caret-down-fill"></i></h3>
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <Form className="px-3">
                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>Nama</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Masukkan nama pemilik rekening" name='accountName' onChange={(e) => setBanka(current => {
                          const nampung = { ...current, [e.target.name]: e.target.value };
                          return nampung;
                        })} />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>No. Rekening</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Masukkan nomor rekening" name='accountNumber' onChange={(e) => setBanka(current => {
                          const nampung = { ...current, [e.target.name]: e.target.value };
                          return nampung;
                        })} />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>Jumlah</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" value={formatter.format(data.totalPrice)} disabled />
                      </Col>
                    </Form.Group>
                    <Button className="float-end mt-3" style={{ width: "10rem" }} onClick={() => {
                      submit(banka)
                      handleShow()
                      }}>
                      <h5 className="m-0">Bayar</h5>
                    </Button>
                  </Form>
                </div>
              </Collapse>
            </Col>
            <Col md={12} className="bg-white p-3 mt-2 mb-4 rounded-4">
              <Button variant="light" className="w-100 d-flex justify-content-between" onClick={() => setOpenz(!openz)}>
                <h4>Bank BCA</h4>
                <h3><i className="bi bi-caret-down-fill"></i></h3>
              </Button>
              <Collapse in={openz}>
                <div id="example-collapse-text">
                  <Form className="px-3">
                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>Nama</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Masukkan nama pemilik rekening" name='accountName' onChange={(e) => setBankb(current => {
                          const nampung = { ...current, [e.target.name]: e.target.value };
                          return nampung;
                        })} />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>No. Rekening</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Masukkan nomor rekening" name='accountNumber' onChange={(e) => setBankb(current => {
                          const nampung = { ...current, [e.target.name]: e.target.value };
                          return nampung;
                        })} />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>Jumlah</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Masukkan nominal" value={formatter.format(data.totalPrice)} disabled />
                      </Col>
                    </Form.Group>
                    <Button className="float-end mt-3" style={{ width: "10rem" }} onClick={() => {submit(bankb)
                      handleShow()}}>
                      <h5 className="m-0">Bayar</h5>
                    </Button>
                  </Form>
                </div>
              </Collapse>
            </Col>
            <Col md={12} className="bg-white p-3 mt-2 mb-4 rounded-4">
              <Button variant="light" className="w-100 d-flex justify-content-between" onClick={() => setOpens(!opens)}>
                <h4>Bank Mandiri</h4>
                <h3><i className="bi bi-caret-down-fill"></i></h3>
              </Button>
              <Collapse in={opens}>
                <div id="example-collapse-text">
                  <Form className="px-3">
                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>Nama</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Masukkan nama pemilik rekening" name='accountName' onChange={(e) => setBankc(current => {
                          const nampung = { ...current, [e.target.name]: e.target.value };
                          return nampung;
                        })} />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>No. Rekening</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Masukkan nomor rekening" name='accountNumber' onChange={(e) => setBankc(current => {
                          const nampung = { ...current, [e.target.name]: e.target.value };
                          return nampung;
                        })} />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>Jumlah</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Masukkan nominal" disabled value={formatter.format(data.totalPrice)} />
                      </Col>
                    </Form.Group>
                    <Button className="float-end mt-3" style={{ width: "10rem" }} onClick={() => {submit(bankc)
                      handleShow()
                    }}>
                      <h5 className="m-0">Bayar</h5>
                    </Button>
                  </Form>
                </div>
              </Collapse>
            </Col>
            <Col md={12} className="bg-white p-3 mt-2 mb-4 rounded-4">
              <Button variant="light" className="w-100 d-flex justify-content-between" onClick={() => setOpena(!opena)}>
                <h4>Bank BNI</h4>
                <h3><i className="bi bi-caret-down-fill"></i></h3>
              </Button>
              <Collapse in={opena}>
                <div id="example-collapse-text">
                  <Form className="px-3">
                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>Nama</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Masukkan nama pemilik rekening" name='accountName' onChange={(e) => setBankd(current => {
                          const nampung = { ...current, [e.target.name]: e.target.value };
                          return nampung;
                        })} />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>No. Rekening</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Masukkan nomor rekening" name='accountNumber' onChange={(e) => setBankd(current => {
                          const nampung = { ...current, [e.target.name]: e.target.value };
                          return nampung;
                        })} />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        <h5>Jumlah</h5>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="Masukkan nominal" disabled value={formatter.format(data.totalPrice)} />
                      </Col>
                    </Form.Group>
                    <div className="payment-button">
                      <Button className="float-end mt-3" style={{ width: "10rem" }} onClick={() => {submit(bankd)
                      handleShow()
                      }}>
                        <h5 className="m-0">Bayar</h5>
                      </Button>
                    </div>
                  </Form>
                </div>
              </Collapse>
            </Col>
          </Row>
          <Modal show={show} onHide={handleClose} className='modal-dialog-centered'>
          <img className="img-delete-confirm" src={Airplane404} alt="" />
          <Modal.Body>
            <div className="fw-bolder text-center">Transaksi berhasil</div>
              <div className="fw-light text-center">
                {data.message}
              </div>
              <div className="mt-3 d-block mx-auto">
              <Button variant="success" onClick={()=>{handleClose();navigate('/')}} className='d-block mx-auto'>
                <h6 className='d-block'>Ok</h6>
              </Button>
            </div>
          </Modal.Body>
        </Modal>
        </Container>
      </Container >
      <Footer />
    </>
  );
}

export default Payment;
