import {
  RESIDENT_LIST_REQUEST,
  RESIDENT_LIST_SUCCESS,
  RESIDENT_LIST_FAIL
} from "../constants/residentConstants";

export const residentListReducers = (state = { residents: [] }, action) => {
  switch (action.type) {
    case RESIDENT_LIST_REQUEST:
      return { loading: true, residents: [] };

    case RESIDENT_LIST_SUCCESS:
      return { loading: false, residents: action.payload };

    case RESIDENT_LIST_FAIL:
      return { loadting: false, error: action.payload };

    default:
      return state;
  }
};
