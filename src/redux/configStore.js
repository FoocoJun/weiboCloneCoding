import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  import thunk from "redux-thunk";
  import clutters from "./modules/clutters"
  
  
  const middlewares = [thunk];
  const enhancer = applyMiddleware(...middlewares);
  const rootReducer = combineReducers({clutters });
  
  const store = createStore(rootReducer, enhancer);
  
  export default store;