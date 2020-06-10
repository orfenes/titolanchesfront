import React, { Component } from 'react';

import  {
  SearchClient,
  ListClient,
  ButtonAddClient,
} from '../../components';
import {
  ClientStyle,
} from '../../style';

class Client extends Component {
  render() {
    return (
      <ClientStyle>
        <ButtonAddClient />
        <SearchClient />
        <ListClient />
      </ClientStyle>
    );
  }
}

export default Client;