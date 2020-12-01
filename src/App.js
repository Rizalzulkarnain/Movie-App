import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { slowImport } from './utils/SlowImport';

import { GlobalStyle } from './styles';

import Layout from './components/Layout/Layout';
import Spinner from './components/Spinner/Spinner';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

const Home = lazy(() => slowImport(import('./pages/Home'), 3000));
const AddMovie = lazy(() => slowImport(import('./pages/AddMovie'), 3000));
const UpdateMovie = lazy(() => slowImport(import('./pages/UpdateMovie'), 3000));
const Documentation = lazy(() =>
  slowImport(import('./pages/ExampleDesignSystem'), 3000)
);
const About = lazy(() => slowImport(import('./pages/About'), 3000));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Suspense
            fallback={
              <Layout>
                <Spinner />
              </Layout>
            }
          >
            <Layout>
              <GlobalStyle />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/add-movie">
                <AddMovie />
              </Route>
              <Route path="/update-movie/:id">
                <UpdateMovie />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/example">
                <Documentation />
              </Route>
            </Layout>
          </Suspense>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
