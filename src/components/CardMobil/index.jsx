import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";

const CardCar = ({ cars }) => {
  console.log(cars);

  const navigate = useNavigate();

  return (
    <Container className="py-3">
      <Row>
        {cars?.map((car) => {
          return (
            <Col md={3} className="mb-3">
              <Card className="h-100">
                <Card.Img variant="top" src={car.image} />
                <Card.Body className="d-flex flex-column">
                  <Card.Text>{car.name}</Card.Text>
                  <Card.Title>{`Rp ${car.price}`}</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>

                  <Button
                    onClick={() => navigate(`/detailcar/${car.id}`)}
                    className="w-100 mt-auto"
                    variant="success"
                  >
                    Pilih Mobil
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardCar;
