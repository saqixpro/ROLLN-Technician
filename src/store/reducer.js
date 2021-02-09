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
    case ActionTypes.DRAFT_ACCOUNT:
      return {
        ...state,
        draftAccount: action.payload.accountInfo
      }
    case ActionTypes.UPDATE_CC:
      return {
        ...state,
        draftAccount: {...state.draftAccount, CCInfo: action.payload.CCInfo}
      }
    default:
      return state;
  }
};
