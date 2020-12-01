import { useState } from 'react';
import FormControl from './FormContainer';
import { Btn, Text, FormWrapper, FormDiv } from '../../styles';

//redux
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions/postsAction';

const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [url, setUrl] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ title, description, rating, url }));

    setTitle('');
    setDescription('');
    setRating('');
    setUrl('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <Text fontSize={2} fontWeight={2} p={2} center>
            Add Movie
          </Text>

          <FormDiv>
            <FormControl
              htmlFor="title"
              id="title"
              name="title"
              value={title}
              label="Title"
              placeholder="Add Title Movie"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormControl
              htmlFor="description"
              id="description"
              name="description"
              value={description}
              label="Description"
              placeholder="Add Description Movie"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormControl
              htmlFor="rating"
              id="rating"
              name="rating"
              value={rating}
              label="Rating"
              placeholder="Add Rating Movie here"
              type="number"
              onChange={(e) => setRating(e.target.value)}
            />
            <FormControl
              htmlFor="url"
              id="url"
              name="url"
              value={url}
              label="Link Url"
              placeholder="Add Movie Url here"
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
            Add a Movie
          </Btn>
        </FormWrapper>
      </form>
    </>
  );
};

export default Form;
