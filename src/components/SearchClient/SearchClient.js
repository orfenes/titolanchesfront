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
        <div className="wrapper-select-find">
          <Label className="text-search-client">Busca do cliente por</Label>
          <select name="cars" id="cars">
            <option value="name">Nome</option>
            <option value="address">Endereço</option>
            <option value="telephone">Telefone</option>
            <option value="neighborhood">Bairro</option>
          </select>
        </div>

        <Input />
      </SearchClientStyle>
    );
  }
}

export { SearchClient }
export default SearchClient;
