import { types } from "../types/types";

const initialState = {
  postsHome: {
    loading: true,
    allPosts: []
  }
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.postsLoaded:
      return {
        ...state,
          postsHome: {
            loading: false,
            allPosts: [...action.payload]
          }
      };

    default:
      return state;
  }
};
