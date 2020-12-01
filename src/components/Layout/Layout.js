import Header from './Header';
import Footer from './Footer';

import {Main} from "../../styles";

const Layout = ({ children }) => (
    <Main>
      <Header />
      {children}
      <Footer />
    </Main>
  );


export default Layout;
