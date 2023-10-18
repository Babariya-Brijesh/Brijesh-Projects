import { LOGIN_DATA, SINGIN_DATA, REMOVE_DATA } from "./actiontype";

export const dataloginfunction = (data) => {
  return {
    type: LOGIN_DATA,
    data,
  };
};

export const singinDatafunction = (data) => {
  return {
    type: SINGIN_DATA,
    data,
  };
};

export const removeDatafunction = () => {
  return {
    type: REMOVE_DATA,
  };
};
