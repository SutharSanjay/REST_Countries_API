import { combineReducers } from "redux";
import { countriereducer } from "./countriesReducer";

const reducer = combineReducers({
    allCountries : countriereducer,
})

export default reducer;