import * as Constant from '../constants/postsConstants';

const ListPosts = {
  loading: true,
  posts: [],
  error: null,
};

const postListReducer = (state = ListPosts, action) => {
  switch (action.type) {
    case Constant.POST_LIST_REQUEST:
      return {
        loading: true,
        posts: [],
        error: null,
      };

    case Constant.POST_LIST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: null,
      };

    case Constant.POST_LIST_ERROR:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };

    case Constant.CREATE_POST_REQUEST:
      return {
        loading: true,
        posts: [],
        error: null,
      };

    case Constant.CREATE_POST_SUCCESS:
      return {
        loading: false,
        posts: [...state.ListPosts, action.payload],
        error: null,
      };

    case Constant.CREATE_POST_ERROR:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };

    case Constant.DELETE_POST_REQUEST:
      return {
        loading: true,
        posts: [],
        error: null,
      };

    case Constant.DELETE_POST_SUCCESS:
      return {
        loading: true,
        posts: state.posts.filter((item) => item.id !== action.payload),
        error: null,
      };

    case Constant.DELETE_POST_ERROR:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };

    case Constant.EDIT_POST_REQUEST:
      return {
        loading: true,
        posts: [],
        error: null,
      };

    case Constant.EDIT_POST_SUCCESS:
      return {
        loading: false,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
        error: null,
      };

    case Constant.EDIT_POST_ERROR:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default postListReducer;
