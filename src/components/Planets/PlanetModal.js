import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../FormContainer";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "80%",
    maxWidth: "600px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
  overlay: { zIndex: 1000 }
};
const terrains = [
  "Canyon",
  "Desert",
  "Forest",
  "Glacier",
  "Hill",
  "Marsh",
  "Mountain",
  "Oasis",
  "Ocean",
  "Open",
  "River",
  "Swamp",
  "Tundra",
  "Valley"
];
Modal.setAppElement("body");

const PlanetModal = (props) => {
  const [name, setName] = useState("");
  const [rotationPeriod, setRotationPeriod] = useState("");
  const [orbitalPeriod, setOrbitalPeriod] = useState("");
  const [diameter, setDiameter] = useState("");
  const [climate, setClimate] = useState("");
  const [gravity, setGravity] = useState("");
  const [terrain, setTerrain] = useState(terrains[0]);
  const [surfaceWater, setSurfaceWater] = useState("");

  const submitHandler = () => {
    props.closeModal();
    props.showSuccess();
  };
  return (
    <Modal
      isOpen={props.modalIsOpen}
      // onAfterOpen={props.afterOpenModal}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Add Planet"
    >
      <h3>Add Planet</h3>

      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="rotationPeriod">
            <Form.Label>Rotation Period</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Rotation Period"
              value={rotationPeriod}
              onChange={(e) => setRotationPeriod(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="orbitalPeriod">
            <Form.Label>Orbital Period</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Orbital Period"
              value={orbitalPeriod}
              onChange={(e) => setOrbitalPeriod(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="diameter">
            <Form.Label>Diameter</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Diameter"
              value={diameter}
              onChange={(e) => setDiameter(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="climate">
            <Form.Label>Climate</Form.Label>
            <Form.Control
              type="text"
              placeholder="Specify Climate"
              value={climate}
              onChange={(e) => setClimate(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="gravity">
            <Form.Label>Gravity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Gravity"
              value={gravity}
              onChange={(e) => setGravity(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="terrain">
            <Form.Label>Terrain</Form.Label>
            <Form.Control
              as="select"
              placeholder="Enter Terrain"
              value={terrain}
              onChange={(e) => setTerrain(e.target.value)}
              required
            >
              {terrains.map((terrain) => {
                return (
                  <option key={terrain} value={terrain}>
                    {terrain}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="surfaceWater">
            <Form.Label>Surface Water</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Surface Water"
              value={surfaceWater}
              onChange={(e) => setSurfaceWater(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <div style={{ marginTop: "20px" }} className="text-center">
            <Button type="submit" variant="primary">
              Add
            </Button>
          </div>
        </Form>
      </FormContainer>
    </Modal>
  );
};

export default PlanetModal;
