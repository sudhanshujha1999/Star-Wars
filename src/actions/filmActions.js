import axios from "axios";
import {
  FILM_LIST_REQUEST,
  FILM_LIST_SUCCESS,
  FILM_LIST_FAIL
} from "../constants/filmConstants";

export const listFilms = (films) => async (dispatch) => {
  try {
    dispatch({ type: FILM_LIST_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const filmsArr = films.split("");
    const filmList = await Promise.all(
      filmsArr.map(async (film) => {
        const { data } = await axios.get(
          `https://swapi.dev/api/films/${film}`,
          config
        );
        return data;
      })
    );

    dispatch({
      type: FILM_LIST_SUCCESS,
      payload: filmList
    });
  } catch (error) {
    dispatch({
      type: FILM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
