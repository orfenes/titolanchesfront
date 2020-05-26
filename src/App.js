import React, { Fragment, useContext } from 'react';
import { Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import Login from './views/Login/Login';
import Client from './views/Client/Client';
import Context from './stores/context';
import {
  PrivateRoute,
  Header,
} from './components'
import {
  Main,
} from './style';

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
        <PrivateRoute exact path="/client" component={Client} />
      </Main>
    </Fragment>
  );
}

export default observer(App);
