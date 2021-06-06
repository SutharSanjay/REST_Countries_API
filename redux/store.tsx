import { createStore } from "redux";
import reducer from "../redux/reducer/index"

const store = createStore(reducer,{})

export default store