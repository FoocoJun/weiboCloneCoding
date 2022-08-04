import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import clutters from "./modules/clutters";
import users from "./modules/users";
import filters from "./modules/filters";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ clutters, users, filters});

const store = createStore(rootReducer, enhancer);

export default store;
