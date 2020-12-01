import styled from 'styled-components';

export const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 25px;
  padding: 30px;
`;

export const PostEdit = styled.div`
  float: right;
  cursor: pointer;
`;

export const Url = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
