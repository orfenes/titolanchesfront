import React, { Fragment, useContext } from 'react';
import { Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import Login from './views/Login/Login';
import Client from './views/Client/Client';
import FormRegister from './views/FormRegister/FormRegister';
import FormEdit from './views/FormEdit/FormEdit'
import Context from './stores/context';
import {
  PrivateRoute,
  Header,
  Loading,
  ModalSuccess,
} from './components'
import {
  Main,
} from './style';

const App = () => {
  const context = useContext(Context);
  const { sessionStore, appStore, modalStore } = context;

  if (typeof sessionStore.auth !== 'undefined' && sessionStore.auth === null) {
    return false;
  }

  return (
    <Fragment>

      <Header />
      <Main>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/client" component={Client} />
        <PrivateRoute exact path="/client-register" component={FormRegister} />
        <PrivateRoute exact path="/client-edit" component={FormEdit} />
      </Main>

      <Loading show={!!appStore.loading} className="w-loading" />
      <ModalSuccess show={!!modalStore.modalSuccess} className="w-loading" />
    </Fragment>
  );
}

export default observer(App);
