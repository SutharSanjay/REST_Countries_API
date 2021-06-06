import {ActionType} from "../contant/action_type";

const initialState = {
    countries : []
} 

export const countriereducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case ActionType.SET_COUNTRIES:
            return {...state,countries : payload};
        default:
            return state;

    }
}