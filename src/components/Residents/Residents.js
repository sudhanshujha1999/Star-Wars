import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "../Grid/Grid";
import { useLocation, Link } from "react-router-dom";
import { listResidents } from "../../actions/residentActions";
import Loader from "../Loader";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Residents = ({ location }) => {
  const dispatch = useDispatch();
  let query = useQuery();

  const planet = query.get("planet");
  const residentNum = query.get("residents");

  const residentList = useSelector((state) => state.residentList);
  const { loading, residents } = residentList;

  useEffect(() => {
    dispatch(listResidents(residentNum));
  }, [dispatch, residentNum]);
  const data = {
    header: [
      "name",
      "height",
      "mass",
      "hair_color",
      "skin_color",
      "eye_color",
      "birth_year",
      "gender"
    ],
    values: residents
  };
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
            <h1 style={{ flex: 5 }}>Star Wars Residents for {planet}</h1>
          </div>
          {data.values.length !== 0 && <Grid data={data} />}
        </div>
      )}
    </div>
  );
};

export default Residents;
