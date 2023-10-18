

import {
    
  ADD_TODO,
   
  } from "./actiontypes";

  
export const addTodo = (id) => {
    return {
      type:ADD_TODO,
      id,
    };
  };