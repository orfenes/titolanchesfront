import React, { Component } from 'react';
import  {
  SearchClient
} from '../../components';
import {
  ClientStyle,
} from '../../style';

class Client extends Component {
  render() {
    return (
      <ClientStyle>
        <SearchClient />
      </ClientStyle>
    );
  }
}

export default Client;
