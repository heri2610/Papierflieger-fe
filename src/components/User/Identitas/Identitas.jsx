import React,{useEffect, useState} from "react";
import { Row, Col, Button, Badge, Container, Form, Accordion, } from "react-bootstrap";
import logocard from "../../../assets/images/Logo-card.svg";
import Arrow from "../../../assets/images/Vector.svg";
import Footer from "../../Footer/Footer";
import NavigationBar from "../../Navbar/NavigationBar";
import "./Identitas.scss";
import { useSelector } from "react-redux";

function Identitas() {
  const { ticket,penumpang } = useSelector((state) => state.ticketReducer);
  console.log(ticket,penumpang.penumpang)
  const [penumpangs,setPenumpang] = useState([])

  useEffect(()=>{
    const passenger = []
    for(let i=0;i<Number(penumpang.penumpang);i++){
      passenger.push({id:i+1,sapaan:'',namadepan:'',namabelakang:'',nopassport:'',masaberlakupassport:'',kebangsaan:'',email:'',tanggallahir:''})
    }
    setPenumpang(passenger)
  },[ticket])
  const handleChange = (index) => (e) => {
    const newValues = [...penumpangs];
    console.log(newValues)
    newValues[index][e.target.name] = e.target.value;
    setPenumpang(newValues);
  };

console.log(penumpangs)
  const dateString = ticket.departureDate
const date = new Date(dateString)
const options = { year: 'numeric', month: 'long', day: 'numeric',weekday:'long' }
const humanReadableDate = date.toLocaleDateString('id-ID', options)
const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR'
});
  return (
    <>
      <NavigationBar />
      <Container fluid className="bg-info">
        <Container>
          <Row className="pt-5 justify-content-center">
            <Col className="bg-white p-3 mt-5 mb-5 rounded col-9">
              <div>
                <h3>Pemberitahuan Identitas</h3>
                <p>Pastikan nama penumpang sama persis dengan yang tertulis di KTP. <span className="text-danger">Hindari kesalahan apa pun</span>, karena maskapai penerbangan tidak mengizinkan koreksi nama setelah pemesanan.</p>
                <p>Pastikan identitas Anda <span className="text-danger">berlaku setidaknya 2 minggu setelah tanggal keberangkatan</span></p>
              </div>
            </Col>
          </Row>
        </Container>
        <Row className="px-3">
          <Col className="bg__bluish p-3 mb-5 rounded">
            <Row >
              <Col md={7}>
                <div className="bg-white p-4 rounded mx-md-5 my-md-2">
                  <Row className="border-bottom py-3">
                    <Col md={3} lg={2} >
                      <img src={logocard} className="img-fluid logo-card" alt="logo-card" />
                    </Col>
                    <Col className=" mt-3 mt-md-0">
                      <h5>Penerbangan</h5>
                      <div className="hstack">
                        <h5><strong>{ticket.from.city.split(',')[0]}</strong></h5>
                        <img src={Arrow} alt="arrow" className="mx-3" />
                        <h5><strong>{ticket.to.city.split(',')[0]}</strong></h5></div>
                      <h5>{humanReadableDate}</h5>
                    </Col>
                  </Row>
                  {/* Badges  */}
      <Row className="py-3">
        <Col md={2}><h3>
          <Badge className="bg-info text-primary ">{ticket.ticketNumber}</Badge>
        </h3></Col>
        <Col md={10}><h3>
          <Badge className="bg-info text-primary float-end">{formatter.format(ticket.price)}/orang</Badge>
        </h3></Col>
      </Row>
      <Row className="mb-4 border-bottom pb-3">
        <Col className="position-relative col mb-3 mb-lg-0">
          <h5 className="text-muted">Keberangkatan</h5>
          <h2>{`${ticket.departureTime.split(":")[0]}:${ticket.departureTime.split(":")[1]}`}</h2>
          <h5>{ticket.from.cityCode}</h5>
          <img src={Arrow} alt="arrow" className="position-absolute top-50 end-15" />
        </Col>
        <Col>
          <h5 className="text-muted">Pendaratan</h5>
          <h2>{`${ticket.arrivalTime.split(':')[0]}:${ticket.arrivalTime.split(':')[1]}`}</h2>
          <h5>{ticket.to.cityCode}</h5>
        </Col>
        <Col>
          <h5 className="text-muted">Durasi Perjalanan</h5>
          <h2>{ticket.flightDuration}</h2>
        </Col>
        <Col>
          <h5 className="text-muted">Lama Perhentian</h5>
          <h2>{ticket.transitDuration}</h2>
        </Col>
      </Row>
      <Row className="">
        <div id="timeline-content" className="border-bottom ps-3">
          <ul className="timeline">
            <li className="event" data-date={`${ticket.departureTime.split(':')[0]}:${ticket.departureTime.split(':')[1]}`} data-day="16 Desember">
              <h3>{ticket.from.city.split(',')[0]}</h3>
              <p>{ticket.from.airportName}{`(${ticket.from.cityCode})`}</p>
              <p>Armada : {ticket.Airplane.airplaneName}</p>
            </li>
            {ticket.totalTransit >= 1 && <li className="event" data-date={`${ticket.arrivalTimeAtTransit.split(":")[0]}:${ticket.arrivalTimeAtTransit.split(":")[1]}`} data-day="16 Desember">
                        <h3>{ticket.transit.city.split(',')[0]}</h3>
                        <p>{ticket.transit.airportName} {`(${ticket.transit.cityCode})`}</p>
                        <p>
                          Armada : {ticket.Airplane.airplaneName}
                        </p>
                      </li>}
            <li className="event" data-date={`${ticket.arrivalTime.split(':')[0]}:${ticket.arrivalTime.split(':')[1]}`} data-day="16 Desember">
              <h3>{ticket.to.city.split(',')[0]}</h3>
              <p>{ticket.to.airportName} {`(${ticket.to.cityCode})`}</p>
              <p>Armada : {ticket.Airplane.airplaneName}</p>
            </li>
          </ul>
        </div>
      </Row>
                  <Row className="">
                    <Col>
                      <h5 className="p-0">Komplementer Bagasi</h5>
                      <p>Harga tiket sudah termasuk beban bagasi per-orang dengan rincian beban sebagasi berikut :</p>
                      <h5 style={{ paddingTop: 0 }}><i className="bi bi-file-zip-fill"></i> Tas/Koper 7 kg x 1</h5>
                      <p className="text-primary"><strong>Tas/Koper yang diperiksa</strong></p>
                    </Col>
                  </Row>
                </div>
              </Col>
              {/* Detail Passenger */}
              <Col className="mt-5 mx-3 mb-5 rounded text-white">
                <h2 className="mb-3 fw-bold">Pengisian Identitas Penumpang</h2>
                <Form>
                  <Accordion>
                    {penumpangs.map((item,index)=> <Accordion.Item eventKey={item.id}>
                      <Accordion.Header>Penumpang {item.id}</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Sapaan</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={handleChange(index)} name='sapaan'>
                              <option value="1">Bapak</option>
                              <option value="2">Ibu</option>
                            </Form.Select>
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nama Depan</Form.Label>
                            <Form.Control placeholder="First name" onChange={handleChange(index)} name='namadepan'/>
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nama Belakang</Form.Label>
                            <Form.Control placeholder="Last name" onChange={handleChange(index)} name='namabelakang' />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Tanggal Lahir</Form.Label>
                            <input type="date" className="form-control" onChange={handleChange(index)} name='tanggallahir' />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Nomor Identitas Passport</Form.Label>
                            <Form.Control placeholder="Nomor Identitas Passport" onChange={handleChange(index)} name='nopassport'/>
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Kebangsaan</Form.Label>
                            <Form.Control placeholder="Nomor Identitas Passport" onChange={handleChange(index)} name='kebangsaan' />
                          </Col>
                          <Col md={12} className="mb-3">
                            <Form.Label className="m-0">Masa Berlaku Passport</Form.Label>
                            <input type="date" className="form-control" onChange={handleChange(index)} name='masaberlakupassport' />
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>)}
                  </Accordion>
                  <Button className="float-end mt-3" type="submit">
                    <p className="mb-0 fs-5">Submit</p>
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Identitas;