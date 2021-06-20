import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  planetListReducers,
  planetDetailReducers
} from "./reducers/planetReducers";
import { filmListReducers } from "./reducers/filmReducers";
import { residentListReducers } from "./reducers/residentReducers";

const reducer = combineReducers({
  planetList: planetListReducers,
  planetDetails: planetDetailReducers,
  filmList: filmListReducers,
  residentList: residentListReducers
});

const initialState = {
  // userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
