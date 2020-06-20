import React, { Component } from 'react';
import Context from '../../stores/context';
import {
  Label,
  Input,
  SearchClientStyle,
} from '../../style'

class SearchClient extends Component {
  static contextType = Context;

  constructor(props){
    super(props);
    this.selectedFilter = this.selectedFilter.bind(this);
    this.insertText = this.insertText.bind(this);
  }

  selectedFilter(event) {
    const {
      clientStore,
    } = this.context;
    clientStore.searchFilter = event.target.value;
  }

  insertText(event) {
    const {
      clientStore,
    } = this.context;

    clientStore.searchValue = event.target.value;
  }


  render() {
    return (
      <SearchClientStyle>
        <div className="wrapper-select-find">
          <Label className="text-search-client">Busca do cliente por</Label>
          <select name="cars" id="cars" onChange={this.selectedFilter}>
            <option value="telephone">Telefone</option>
            <option value="name">Nome</option>
            <option value="address">Endereço</option>
            <option value="neighborhood">Bairro</option>
          </select>
        </div>

        <Input onChange={this.insertText} />
      </SearchClientStyle>
    );
  }
}

export { SearchClient }
export default SearchClient;
