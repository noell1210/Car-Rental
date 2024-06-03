import React from "react";
import LogoOne from "../../assets/icon1.png";
import LogoTwo from "../../assets/icon2.png";
import LogoThree from "../../assets/icon3.png";
import LogoFour from "../../assets/icon4.png";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const WhyUs = () => {
  return (
    <Container className="py-5">
      <h1>WhyUs?</h1>
      <p>Mengapa harus pilih Binar Car Rental?</p>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <img src={LogoOne} alt="" />
              <Card.Title className="py-3">Mobil Lengkap</Card.Title>
              <Card.Text>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <img src={LogoTwo} alt="" />
              <Card.Title className="py-3">Harga Murah</Card.Title>
              <Card.Text>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <img src={LogoThree} alt="" />
              <Card.Title className="py-3">Layanan 24 Jam</Card.Title>
              <Card.Text>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <img src={LogoFour} alt="" />
              <Card.Title className="py-3">Sopir Profesional</Card.Title>
              <Card.Text>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUs;
