import React from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";

const PlanetDetails = ({ planet }) => {
  return (
    <Card>
      <ListGroup variant="flush">
        <Row>
          <Col md={6}>
            <ListGroup.Item>Name</ListGroup.Item>
          </Col>
          <Col md={6}>
            <ListGroup.Item>{planet.name}</ListGroup.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ListGroup.Item>Rotation Period</ListGroup.Item>
          </Col>
          <Col md={6}>
            <ListGroup.Item>{planet.rotation_period}</ListGroup.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ListGroup.Item>Orbital Period</ListGroup.Item>
          </Col>
          <Col md={6}>
            <ListGroup.Item>{planet.orbital_period}</ListGroup.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ListGroup.Item>Diameter</ListGroup.Item>
          </Col>
          <Col md={6}>
            <ListGroup.Item>{planet.diameter}</ListGroup.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ListGroup.Item>Climate</ListGroup.Item>
          </Col>
          <Col md={6}>
            <ListGroup.Item>{planet.climate}</ListGroup.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ListGroup.Item>Gravity</ListGroup.Item>
          </Col>
          <Col md={6}>
            <ListGroup.Item>{planet.gravity}</ListGroup.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ListGroup.Item>Terrain</ListGroup.Item>
          </Col>
          <Col md={6}>
            <ListGroup.Item>{planet.terrain}</ListGroup.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ListGroup.Item>Surface Water</ListGroup.Item>
          </Col>
          <Col md={6}>
            <ListGroup.Item>{planet.surface_water}</ListGroup.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ListGroup.Item>population</ListGroup.Item>
          </Col>
          <Col md={6}>
            <ListGroup.Item>{planet.population}</ListGroup.Item>
          </Col>
        </Row>
      </ListGroup>
    </Card>
  );
};

export default PlanetDetails;
