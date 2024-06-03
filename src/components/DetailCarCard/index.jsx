import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageCar from "../../assets/imgcar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const DetailCarCard = () => {
  const [detailCar, setDetailCar] = useState({});

  const param = useParams();
  const getDetail = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${param?.id}`)
      .then((res) => {
        // console.log(res.data);

        setDetailCar(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDetail();
  }, []);

  console.log(detailCar);
  return (
    <Container>
      <Row>
        <Col className="mb-3">
          <Card className="h-100" style={{ width: "50rem" }}>
            <Card.Body className="d-flex flex-column">
              <Card.Title>Tentang Paket</Card.Title>
              <Card.Title>Include</Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
              </Card.Text>
              <Card.Title>Exclude</Card.Title>
              <Card.Text>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </Card.Text>
              <Card.Title>Refund, Reschedule, Overtime</Card.Title>
              <Card.Text>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-60" style={{ width: "19rem" }}>
            <Card.Img variant="top" src={detailCar.image} />
            <Card.Body className="d-flex flex-column">
              <Card.Text>
                <p>{detailCar.name}</p>
                <p>
                  <FontAwesomeIcon icon={faUserGroup} />
                  6-8 orang
                </p>
              </Card.Text>
              <Card.Text>
                <p>
                  Total Rp
                  {detailCar.price}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailCarCard;
