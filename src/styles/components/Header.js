import styled from 'styled-components';

import { theme } from '../root';

export const Nav = styled.div`
  top: 0;
  position: fixed;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: auto;
  background-color: ${theme.colors.primary};
  padding: 18px;

  h1 {
    font-size: 18px;
  }
`;

export const NavDiv = styled.div`
  margin-top: 14px;
`;
