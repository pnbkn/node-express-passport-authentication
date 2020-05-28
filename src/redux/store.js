import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducers";


//REDUX STORE WITH MIDDLEWARE
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export * from "./thunks";
export * from "./actions";
export * from "./reducers";
