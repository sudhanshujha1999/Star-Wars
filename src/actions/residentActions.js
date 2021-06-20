import axios from "axios";
import {
  RESIDENT_LIST_REQUEST,
  RESIDENT_LIST_SUCCESS,
  RESIDENT_LIST_FAIL
} from "../constants/residentConstants";

export const listResidents = (residents) => async (dispatch) => {
  try {
    dispatch({ type: RESIDENT_LIST_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const residentsArr = residents.split("n");
    const filmList = await Promise.all(
      residentsArr.map(async (resident) => {
        const { data } = await axios.get(
          `https://swapi.dev/api/people/${resident}`,
          config
        );
        return data;
      })
    );

    dispatch({
      type: RESIDENT_LIST_SUCCESS,
      payload: filmList
    });
  } catch (error) {
    dispatch({
      type: RESIDENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
