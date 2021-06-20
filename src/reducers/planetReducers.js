import {
  PLANET_LIST_REQUEST,
  PLANET_LIST_SUCCESS,
  PLANET_LIST_FAIL,
  PLANET_DETAILS_REQUEST,
  PLANET_DETAILS_SUCCESS,
  PLANET_DETAILS_FAIL
} from "../constants/planetConstants";

export const planetListReducers = (state = { results: [] }, action) => {
  switch (action.type) {
    case PLANET_LIST_REQUEST:
      return { loading: true, results: [] };

    case PLANET_LIST_SUCCESS:
      return { loading: false, ...action.payload };

    case PLANET_LIST_FAIL:
      return { loadting: false, error: action.payload };

    default:
      return state;
  }
};
export const planetDetailReducers = (state = { planet: {} }, action) => {
  switch (action.type) {
    case PLANET_DETAILS_REQUEST:
      return { loading: true, planet: {} };

    case PLANET_DETAILS_SUCCESS:
      return { loading: false, planet: action.payload };

    case PLANET_DETAILS_FAIL:
      return { loadting: false, error: action.payload };

    default:
      return state;
  }
};
