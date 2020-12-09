import { types } from "../types/types";

const initialState = [];

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.postsSaved:
      return {
          name: action.payload.name
      };

    default:
      return state;
  }
};