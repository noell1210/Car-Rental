import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IconOne from "../../assets/iconfb.jpg";
import IconTwo from "../../assets/iconig.png";
import IconThree from "../../assets/icontwt.png";
import IconFour from "../../assets/iconmail.png";
import IconFive from "../../assets/icontwc.png";
import CarLogo from "../../assets/logo.png";
import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className="mb-3" md={3}>
          <p className="fw-bold">
            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
          </p>
          <p className="fw-bold">binarcarrental@gmail.com</p>
          <p className="fw-bold">081-233-334-808</p>
        </Col>
        <Col className="mb-3" md={3}>
          <p>Our services</p>
          <p>Why Us</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </Col>

        <Col className="mb-3" md={3}>
          <p className="fw-bold">Connect with us</p>
          <Row className="gap-1">
            <Col>
              <Image className="me-3" src={IconOne} alt="" />

              <Image className="me-3" src={IconTwo} alt="" />

              <Image className="me-3" src={IconThree} alt="" />

              <Image className="me-3" src={IconFour} alt="" />

              <Image className="me-3" src={IconFive} alt="" />
            </Col>
          </Row>
        </Col>
        <Col className="mb-3" md={3}>
          <p className="fw-bold">Copyright Binar 2022</p>
          <Image src={CarLogo} width={200} height={200} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
