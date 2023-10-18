import {
    
    ADD_TODO,
   
  } from "../actions/actiontypes";

const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
return action.id


default:
    return state;
    }}

    export default todoReducer;