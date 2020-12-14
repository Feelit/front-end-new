
import {
  getAllPosts,
} from "../helpers/fetch";

import { types } from "../types/types";

export const postsStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await getAllPosts();
      dispatch(postsLoaded(resp));
    } catch (error) {
      console.log(error);
    }
  };
};

const postsLoaded = (posts) => ({
  type: types.postsLoaded,
  payload: posts,
});