import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiChevronDown, FiChevronsUp } from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import { vehicleList } from "../../data/vehicleList";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState(vehicleList);
  const [activeVehicle, setActiveVehicle] = useState(0);
  return (
    <Container>
      <SectionTitle title="Vehicles" />
      <Row>
        <Col lg={3}>
          <ul className="vehicleList">
            <li>
              <Button>
                <FiChevronsUp />
              </Button>
            </li>
            {vehicles.map((vehicle, index) => (
              <li
                key={vehicle.id}
                className={index === activeVehicle ? "active" : ""}
                onClick={() => setActiveVehicle(index)}
              >
                {vehicle.model}
              </li>
            ))}
            <li></li>
            <li>
              <Button>
                <FiChevronDown />
              </Button>
            </li>
          </ul>
        </Col>
        <Col lg={6}>ARAÇ RESMİ</Col>
        <Col lg={3}>DETAYLAR</Col>
      </Row>
    </Container>
  );
};

export default Vehicles;
