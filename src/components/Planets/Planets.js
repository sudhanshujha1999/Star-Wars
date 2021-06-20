import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPlanets } from "../../actions/planetActions";
import "./Planets.css";
import Loader from "../Loader";
import Message from "../Message";
import PlanetModal from "./PlanetModal";

import Grid from "../Grid/Grid";

const Planets = ({ history }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const planetList = useSelector((state) => state.planetList);
  const { loading, results } = planetList;

  useEffect(() => {
    dispatch(listPlanets());
  }, [dispatch]);

  const showSuccess = () => {
    setSuccess(true);
    setTimeout(function () {
      setSuccess(false);
    }, 5000);
  };
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const data = {
    header: [
      "name",
      "rotation_period",
      "orbital_period",
      "diameter",
      "climate",
      "gravity",
      "terrain",
      "surface_water",
      "population"
    ],
    values: results,

    actions: [
      {
        label: "Go to Films",
        name: "films",
        action: (row) => {
          const filmNumbers = row.films.map((filmURL) => filmURL.slice(-2, -1));

          history.push(
            `/films/?planet=${row.name}&films=${filmNumbers.join("")}`
          );
          console.log(`redirect to grid with ${row.films.length} Films`);
        }
      },
      {
        label: "Show Detail",
        name: "details",
        action: (row) => {
          const planetNum = row.url.split("/")[5];
          history.push(`planets/?planet=${planetNum}`);
        }
      },
      {
        label: "Go to Residents",
        name: "residents",
        action: (row) => {
          const residentNumbers = row.residents.map(
            (residentURL) => residentURL.split("/")[5]
          );
          history.push(
            `/residents/?planet=${row.name}&residents=${residentNumbers.join(
              "n"
            )}`
          );
          console.log(
            `redirect to grid with ${row.residents.length} Residents`
          );
        }
      }
    ]
  };
  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <button
              style={{ flex: 1 }}
              type="button"
              className="btn btn-outline-info"
              onClick={openModal}
            >
              Add Planets
            </button>

            <h1 style={{ flex: 5 }}>Star Wars Planets</h1>
          </div>
          {success && <Message variant="success">Successfully added</Message>}
          {data.values.length !== 0 && <Grid history={history} data={data} />}

          <PlanetModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            showSuccess={showSuccess}
          />
        </div>
      )}
    </div>
  );
};

export default Planets;
