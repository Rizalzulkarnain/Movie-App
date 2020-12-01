import { Nav, NavDiv, RouterLink, Text } from '../../styles';

const Header = () => (
  <Nav>
    <RouterLink to="/">
      <Text fontSize={2} mt={1}>
        MOVIE APP
      </Text>
    </RouterLink>

    <NavDiv>
      <RouterLink to="/add-movie">Add Note</RouterLink>
    </NavDiv>

    <NavDiv>
      <RouterLink to="/about">About</RouterLink>
    </NavDiv>
  </Nav>
);

export default Header;
