import {
  FILM_LIST_REQUEST,
  FILM_LIST_SUCCESS,
  FILM_LIST_FAIL
} from "../constants/filmConstants";

export const filmListReducers = (state = { films: [] }, action) => {
  switch (action.type) {
    case FILM_LIST_REQUEST:
      return { loading: true, films: [] };

    case FILM_LIST_SUCCESS:
      return { loading: false, films: action.payload };

    case FILM_LIST_FAIL:
      return { loadting: false, error: action.payload };

    default:
      return state;
  }
};
