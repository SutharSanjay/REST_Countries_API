import {ActionType} from "../contant/action_type";

export const setcountries = (countries)=>{
    return{
        type:ActionType.SET_COUNTRIES,
        payload: countries,
    };
};