import { useEffect } from 'react';
import Post from './Post';

import Spinner from '../Spinner/Spinner';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/actions/postsAction';

import { AlertRed, CardLayout } from '../../styles';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <CardLayout>
      {posts.loading ? (
        <>
          <Spinner />
        </>
      ) : posts.error ? (
        <AlertRed>{posts.error}</AlertRed>
      ) : (
        posts.posts.map((post) => <Post key={post.id} posts={post} />)
      )}
    </CardLayout>
  );
};

export default Posts;
