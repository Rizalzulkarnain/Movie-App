import { produce } from 'immer';
import * as Constant from '../constants/postsConstants';

const ListPosts = {
  loading: true,
  posts: [],
  error: null,
};

const postListReducer = produce((draft, action) => {
  switch (action.type) {
    case Constant.POST_LIST_REQUEST:
      draft.loading = true;
      draft.posts = [];
      draft.error = null;
      return;

    case Constant.POST_LIST_SUCCESS:
      draft.loading = false;
      draft.posts = action.payload;
      draft.error = null;
      return;

    case Constant.POST_LIST_ERROR:
      draft.loading = false;
      draft.posts = [];
      draft.error = action.payload;
      return;

    case Constant.CREATE_POST_REQUEST:
      draft.loading = true;
      draft.posts = [];
      draft.error = null;
      return;

    case Constant.CREATE_POST_SUCCESS:
      draft.loading = false;
      draft.posts = [...draft.ListPosts, action.payload];
      draft.draft.error = null;
      return;

    case Constant.CREATE_POST_ERROR:
      draft.loading = false;
      draft.posts = [];
      draft.error = action.payload;
      return;

    case Constant.DELETE_POST_REQUEST:
      draft.loading = true;
      draft.posts = [];
      draft.error = null;
      return;

    case Constant.DELETE_POST_SUCCESS:
      draft.loading = true;
      draft.posts = draft.posts.filter((item) => item.id !== action.payload);
      draft.error = null;
      return;

    case Constant.DELETE_POST_ERROR:
      draft.loading = false;
      draft.posts = [];
      draft.draft.error = action.payload;
      return;

    case Constant.EDIT_POST_REQUEST:
      draft.loading = true;
      draft.posts = [];
      draft.error = null;
      return;

    case Constant.EDIT_POST_SUCCESS:
      draft.loading = false;
      draft.posts = draft.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      draft.draft.error = null;
      return;

    case Constant.EDIT_POST_ERROR:
      draft.loading = false;
      draft.posts = [];
      draft.error = action.payload;
      return;

    default:
      return;
  }
}, ListPosts);

export default postListReducer;
