import React, { Component } from 'react';
import {
  Label,
  Input,
  SearchClientStyle,
} from '../../style'

class SearchClient extends Component {
  render() {
    return (
      <SearchClientStyle>
        <Label className="text-search-client">Busca do cliente</Label>
        <Input />
      </SearchClientStyle>
    );
  }
}

export { SearchClient }
export default SearchClient;
