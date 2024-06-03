import React from "react";
import OurServiceLogo from "../../assets/imgservice.png";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const OurService = () => {
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col className="mb-4" md={6}>
            <Image fluid src={OurServiceLogo} alt="" />
          </Col>
          <Col md={6}>
            <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
            <p className="fw-bold">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <Row>
              <p className="fw-bold">
                <FontAwesomeIcon icon={faCheck} className="checkicon" />
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
              <p className="fw-bold">
                <FontAwesomeIcon icon={faCheck} className="checkicon" />
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
              <p className="fw-bold">
                <FontAwesomeIcon icon={faCheck} className="checkicon" />
                Sewa Mobil Jangka Panjang Bulanan
              </p>
              <p className="fw-bold">
                <FontAwesomeIcon icon={faCheck} className="checkicon" />
                Gratis Antar - Jemput Mobil di Bandara
              </p>
              <p className="fw-bold">
                <FontAwesomeIcon icon={faCheck} className="checkicon" />
                Layanan Airport Transfer / Drop In Out
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OurService;
