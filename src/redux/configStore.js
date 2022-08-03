import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import clutters from "./modules/clutters";
import users from "./modules/users";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ clutters, users });

const store = createStore(rootReducer, enhancer);

export default store;
