import { ActionTypes, LoginStates } from "../constants";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return {
        ...state,
        loginState: LoginStates.LOGGED_IN,
        currentUser: action.payload.user,
      };
    case ActionTypes.LOGOUT_USER:
      return {
        ...state,
        loginState: LoginStates.LOGGED_OUT,
        currentUser: null,
      };
    default:
      return state;
  }
};
