
import {
  getAllPosts,
  fetchWithToken,
  fetchWithoutToken,

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

export const startNewPost = (title, photo) => {
  const userName = JSON.parse(localStorage.getItem("userName")) || "";
  return async (dispatch) => {
    const resp = await fetchWithToken(
      `users/${userName}/posts/`,
      { title, photo },
      "POST"
    );
    return resp;
    //const body = await resp.json();
  };
};

export const getPostById = (id, user) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(
      `users/${user}/posts/${id}/`);
      const post = await resp.json();
      dispatch(
        postSelected({
          id: post.id,
          user: post.user,
          profile: post.profile,
          title: post.title,
          photo: post.photo,
          post_rating: post.post_rating,
          comments: post.comments
        })
      );
  };
};

export const addNewComment = (id, user, text) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(
      `users/${user}/posts/${id}/comment/`,
      { text },
      "POST"
    );
    return resp;
    //const body = await resp.json();
  };
};

const postSelected = (post) => ({
  type: types.postSelected,
  payload: post,
});

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      "users/login/",
      { email, password },
      "POST"
    );
    const body = await resp.json();
    if (body.access_token) {
      localStorage.setItem("userToken", JSON.stringify(body.access_token))
      localStorage.setItem("userName", JSON.stringify(body.user.username))
      dispatch(
        login({
          user: body.user,
          access_token: body.access_token
        })
      );
    } else {
      console.log('error al iniciar sesion');
    }
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

const postsLoaded = (posts) => ({
  type: types.postsLoaded,
  payload: posts,
});