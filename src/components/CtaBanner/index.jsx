import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const CtaBanner = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <Card className="text-center bg-primary text-white py-5">
            <Card.Body className="py-3">
              <Card.Title>
                <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
              </Card.Title>
              <Card.Text className="py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. .
              </Card.Text>
              <Button variant="success">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CtaBanner;
