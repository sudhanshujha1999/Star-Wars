import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "../Grid/Grid";
import "./Films.css";
import { useLocation, Link } from "react-router-dom";
import { listFilms } from "../../actions/filmActions";
import Loader from "../Loader";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Films = ({ location }) => {
  const dispatch = useDispatch();
  let query = useQuery();
  const planet = query.get("planet");
  const filmNum = query.get("films");
  // const planet = location.search.split("&")[0].split("=")[1];
  // const filmNum = location.search.split("&")[1].split("=")[1];
  const filmList = useSelector((state) => state.filmList);
  const { loading, films } = filmList;

  useEffect(() => {
    dispatch(listFilms(filmNum));
  }, [dispatch, filmNum]);
  const data = {
    header: [
      "title",
      "episode_id",
      "opening_crawl",
      "director",
      "producer",
      "release_date"
    ],
    values: films
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
            <h1 style={{ flex: 5 }}>Star Wars Films for {planet}</h1>
          </div>
          {data.values.length !== 0 && <Grid data={data} />}
        </div>
      )}
    </div>
  );
};

export default Films;
