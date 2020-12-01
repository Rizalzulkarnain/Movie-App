import { useHistory } from 'react-router-dom';
import { PostEdit, Btn, Box, Text, Url } from '../../styles';

import { useDispatch } from 'react-redux';
import { removePost } from '../../redux/actions/postsAction';

const Card = ({ posts }) => {
  const id = posts.id;

  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removePost(id));
  };

  return (
    <>
      <Box
        w={300}
        background={'gray1'}
        center
        r={3}
        mt={4}
        p={2}
        textAlign={'center'}
      >
        <PostEdit onClick={() => history.push(`/update-movie/${id}`)}>
          <i className="far fa-edit"></i>
        </PostEdit>

        <Text fontWeight={3}>{id}</Text>

        <Text fontSize={3} mt={2} fontWeight={2}>
          <Url href={posts.url} target="blank">
            {posts.title}
          </Url>
        </Text>
        <Text o={0.4} mb={2} mt={1}>
          {posts.description}
        </Text>
        <Box>
          <Btn size="sm" color="gray2" disabled>
            {posts.rating}
          </Btn>
        </Box>

        <Box>
          <Btn mt={2} size="sm" color="yellow" onClick={() => handleDelete(id)}>
            <i className="fas fa-trash"></i>
          </Btn>
        </Box>
      </Box>
    </>
  );
};

export default Card;
