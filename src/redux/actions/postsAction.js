import * as Constant from '../constants/postsConstants';
import * as API from '../../API/API';

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: Constant.POST_LIST_REQUEST,
      payload: [],
    });

    const { data } = await API.fetchPosts();
    dispatch({
      type: Constant.POST_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: Constant.POST_LIST_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({
      type: Constant.CREATE_POST_REQUEST,
    });

    const { data } = await API.createPost(post);
    dispatch({
      type: Constant.CREATE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: Constant.CREATE_POST_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: Constant.DELETE_POST_REQUEST,
    });

    const { data } = await API.removePost(id);
    dispatch({
      type: Constant.DELETE_POST_SUCCESS,
      payload: data.data,
    });

    const res = await API.fetchPosts();
    dispatch({
      type: Constant.POST_LIST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: Constant.DELETE_POST_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editPost = (id, post) => async (dispatch) => {
  try {
    dispatch({
      type: Constant.EDIT_POST_REQUEST,
    });

    const { data } = await API.updatePost(id, post);
    dispatch({
      type: Constant.EDIT_POST_SUCCESS,
      payload: data.data,
    });

    const res = await API.fetchPosts();
    dispatch({
      type: Constant.POST_LIST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: Constant.EDIT_POST_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
