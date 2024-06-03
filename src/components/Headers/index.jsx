import React from "react";
import HeadersLogo from "../../assets/imgcar.png";
import "./style.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Headers = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#F1F3FF" }}>
        <Container className="py-3">
          <Row className="px-1">
            <Col className="mb-3" md={6}>
              <h1 className="mb-4">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h1>
              <p className="mb-4">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Link to={"/findcars"}>
                <Button variant="success">Mulai Sewa Mobil</Button>
              </Link>
            </Col>
            <Col md={6}>
              <Image fluid src={HeadersLogo} alt="" />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Headers;
