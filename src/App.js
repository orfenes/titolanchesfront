import React, { Fragment, useContext } from 'react';
import { Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import Login from './views/Login/Login';
import ListClient from './views/ListClient/ListClient';
import Context from './stores/context';
import {
  PrivateRoute,
  Header,
  Main,
} from './components'

const App = () => {
  const context = useContext(Context);
  const { sessionStore } = context;

  if (typeof sessionStore.auth !== 'undefined' && sessionStore.auth === null) {
    return false;
  }

  return (
    <Fragment>

      <Header />
      <Main>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/list-client" component={ListClient} />
      </Main>
    </Fragment>
  );
}

export default observer(App);
