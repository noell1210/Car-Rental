import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import CardCar from "../CardMobil";
import axios from "axios";

const SearchBar = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  const getCars = async () => {
    const response = await axios({
      method: "get",
      url: `https://api-car-rental.binaracademy.org/customer/v2/car?page=${page}`,
    });

    setCars(response.data.cars);
  };

  useEffect(() => {
    getCars();
  }, [page]);
  //console.log(cars);
  return (
    <>
      <Container className="py-4">
        <Card>
          <Form>
            <Row className="px-4 py-3">
              <Col>
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control type="text" placeholder="Ketik nama/tipe mobil" />
              </Col>
              <Col>
                <Form.Label>Kategori</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Masukan Kapasitas Mobil</option>
                  <option>2-4 orang</option>
                  <option>4-6 orang</option>
                  <option>6-8 orang</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>Harga</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Masukan Harga Sewa Per Hari</option>
                  <option>{"< Rp. 400.000"}</option>
                  <option>{"Rp. 400.000 - Rp. 600.000"}</option>
                  <option>{"> Rp. 600.000"}</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>Status </Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Detail Mobil</option>
                  <option>Disewa</option>
                  <option>Belum Disewa</option>
                </Form.Select>
              </Col>

              <Col className="d-flex align-items-end">
                <Button variant="success" type="submit">
                  Cari Mobil
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
      <CardCar cars={cars} />
      <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <Button variant="primary" onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
