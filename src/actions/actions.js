
import {
  getAllPosts,
  fetchWithToken
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

export const startNewPost = (title, username) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(
      `users/${username}/posts/`,
      { title },
      "POST"
    );
    //const body = await resp.json();
  };
};

const postsLoaded = (posts) => ({
  type: types.postsLoaded,
  payload: posts,
});