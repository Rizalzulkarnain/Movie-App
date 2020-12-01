import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormControl from './FormContainer';
import { Box, Btn, Text, FormWrapper, FormDiv } from '../../styles';

import * as API from '../../API/API';

//redux
import { useDispatch } from 'react-redux';
import { editPost } from '../../redux/actions/postsAction';

const UpdateForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [url, setUrl] = useState('');

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    API.fetchPost(id).then((item) => {
      setTitle(item.data.data.title);
      setDescription(item.data.data.description);
      setRating(item.data.data.rating);
      setUrl(item.data.data.url);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editPost(id, { title, description, rating, url }));

    setTitle('');
    setDescription('');
    setRating('');
    setUrl('');
  };

  return (
    <>
      <Box mt={5}>
        <form onSubmit={handleSubmit}>
          <FormWrapper>
            <Text fontSize={2} fontWeight={2} p={2} center>
              Update Movie
            </Text>

            <FormDiv>
              <FormControl
                htmlFor="title"
                id="title"
                name="title"
                value={title}
                label="Title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormControl
                htmlFor="description"
                id="description"
                name="description"
                value={description}
                label="Description"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              />
              <FormControl
                htmlFor="rating"
                id="rating"
                name="rating"
                value={rating}
                label="Rating"
                type="number"
                onChange={(e) => setRating(e.target.value)}
              />
              <FormControl
                htmlFor="url"
                id="url"
                name="url"
                value={url}
                label="Link Url"
                type="text"
                onChange={(e) => setUrl(e.target.value)}
              />
            </FormDiv>

            <Btn
              mb={2}
              center
              type="submit"
              size="md"
              color="green"
              disabled={!{ title, description, rating, url }}
            >
              Update a Movie
            </Btn>
          </FormWrapper>
        </form>
      </Box>
    </>
  );
};

export default UpdateForm;
