import { types } from "../types/types";

const initialState = {
  postsHome: {
    loading: true,
    allPosts: []
  },
  postSelected :{
    id: 0,
    user: "",
    profile: 0,
    title: "",
    photo: null,
    post_rating: null,
    comments: []
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
    case types.postSelected:
      return {
        ...state,
        postSelected: {
            loading: false,
            ...action.payload
          }
      };

    default:
      return state;
  }
};
