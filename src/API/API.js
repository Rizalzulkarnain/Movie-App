import Http from './Http';

export const fetchPosts = () => {
  return Http.get('api/movies');
};

export const fetchPost = (id) => {
  return Http.get(`api/movie/${id}`);
};

export const createPost = (newPost) => {
  return Http.post(`api/movie`, newPost);
};

export const updatePost = (id, updatePost) => {
  return Http.put(`api/movie/${id}`, updatePost);
};

export const removePost = (id) => {
  return Http.delete(`api/movie/${id}`);
};
