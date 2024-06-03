import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
const SearchBarSecond = () => {
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
    </>
  );
};

export default SearchBarSecond;
