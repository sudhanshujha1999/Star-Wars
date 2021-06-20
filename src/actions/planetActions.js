import axios from "axios";
import {
  PLANET_LIST_REQUEST,
  PLANET_LIST_SUCCESS,
  PLANET_LIST_FAIL,
  PLANET_DETAILS_REQUEST,
  PLANET_DETAILS_SUCCESS,
  PLANET_DETAILS_FAIL
} from "../constants/planetConstants";

export const listPlanets = () => async (dispatch) => {
  try {
    dispatch({ type: PLANET_LIST_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.get(`https://swapi.dev/api/planets/`, config);

    dispatch({
      type: PLANET_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PLANET_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
export const listPlanetDetails = (planet) => async (dispatch) => {
  try {
    dispatch({ type: PLANET_DETAILS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.get(
      `https://swapi.dev/api/planets/${planet}/`,
      config
    );

    dispatch({
      type: PLANET_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PLANET_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
