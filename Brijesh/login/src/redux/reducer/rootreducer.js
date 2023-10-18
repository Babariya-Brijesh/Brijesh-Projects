import { LOGIN_DATA, SINGIN_DATA, REMOVE_DATA } from "../action/actiontype";

const initialState = [
  {
    isLogin: false,
    userData: { username: "brijesh", password: 123 },
  },
];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_DATA:
      state[0].isLogin = true;
      return state;

    case SINGIN_DATA:
      return (state = action.data);

    case REMOVE_DATA:
      return (state = [{ isLogin: false, userData: {} }]);

    default:
      return state;
  }
};

export default dataReducer;
