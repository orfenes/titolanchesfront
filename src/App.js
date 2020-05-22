import React from 'react';
import { Route } from 'react-router-dom';
import { Flex } from 'rebass'
import Login from './views/Login/Login';
import ListClient from './views/ListClient/ListClient';

const App = () => {
  return (
    <Flex flexWrap='wrap' justifyContent="center">
      <Route exact path="/" component={Login} />
      <Route exact path="/list-client" component={ListClient} />
    </Flex>
  );
}

export default App;
