import { types } from "../types/types";

const initialState = {
  id:'',
  name:'',
  posts:''
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.userSaved:
      return {
          name: action.payload.name
      };

    default:
      return state;
  }
};