//external import
import { createStore } from "redux";

//internal import
import { counterReducer } from "./services/reducers/counterReducer";
const store = createStore(counterReducer);
export default store;
