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
    const {
      history,
    } = this.props;

    return (
      <ClientStyle>
        <ButtonAddClient />
        <SearchClient />
        <ListClient history={history}/>
      </ClientStyle>
    );
  }
}

export default Client;
