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

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </Col>
        <Col>
          <p>Our services</p>
          <p>Why Us</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </Col>

        <Col>
          <p>Connect with us</p>
          <Row>
            <Col>
              <img src={IconOne} alt="" />
            </Col>
            <Col>
              <img src={IconTwo} alt="" />
            </Col>
            <Col>
              <img src={IconThree} alt="" />
            </Col>
            <Col>
              <img src={IconFour} alt="" />
            </Col>
            <Col>
              <img src={IconFive} alt="" />
            </Col>
          </Row>
        </Col>
        <Col>
          <p>Copyright Binar 2022</p>
          <img src={CarLogo} width={200} height={200} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
