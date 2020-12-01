import { combineReducers } from 'redux';

import postListReducer from './reducers/postsReducer';

const rootReducers = combineReducers({
  posts: postListReducer,
});

export default rootReducers;
