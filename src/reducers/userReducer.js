import { types } from "../types/types";

const initialState = {
  checking: true,
  "user": {
      "username": "",
      "first_name": "",
      "email": "",
      "profile": {
          "picture": null,
          "biography": "",
          "profile_rating": 5.0
      }
  },
  "access_token": ""

};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };
    case types.authLogout:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };

    default:
      return state;
  }
};