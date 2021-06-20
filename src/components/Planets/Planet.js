import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { listPlanetDetails } from "../../actions/planetActions";
import PlanetDetails from "./PlanetDetails";
import Loader from "../Loader";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Planet = () => {
  const dispatch = useDispatch();
  let query = useQuery();
  const planetNum = query.get("planet");

  const planetDetails = useSelector((state) => state.planetDetails);
  const { loading, planet } = planetDetails;

  useEffect(() => {
    dispatch(listPlanetDetails(planetNum));
  }, [dispatch, planetNum]);
  return (
    <div className="Container">
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
            <Link style={{ flex: 1 }} to="/">
              All Planets
            </Link>
            <h1 style={{ flex: 5 }}>{planet.name}</h1>
          </div>
          <PlanetDetails planet={planet} />
        </div>
      )}
    </div>
  );
};

export default Planet;
