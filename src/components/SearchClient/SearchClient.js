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
    this.findList = this.findList.bind(this);
    this.state = {
      typeFind: 'name',
      textInput: '',
    }
  }

  selectedFilter(event) {
    this.setState({typeFind: event.target.value});
  }

  insertText(event) {
    this.setState({textInput: event.target.value});
  }

  findList() {
    const {
      clientStore,
      appStore,
      modalStore,
    } = this.context;

    const {
      typeFind,
      textInput
    } = this.state;

    const params = {
      url: `${typeFind}__regex=/${textInput}/`,
    };

    appStore.toggleloading(true);

    clientStore.doRequestFindClient(params)
      .then(() => {
        appStore.toggleloading(false);
      }).catch((err) => {
        modalStore.title = "Ocorreu um erro na busca do cliente";
        modalStore.clearModalCallBack();
        modalStore.toogleModalSucess(true);
        appStore.toggleloading(false);
      });
  }


  render() {
    return (
      <SearchClientStyle>
        <div className="wrapper-select-find">
          <Label className="text-search-client">Busca do cliente por</Label>
          <select name="cars" id="cars" onChange={this.selectedFilter}>
            <option value="name">Nome</option>
            <option value="address">Endereço</option>
            <option value="telephone">Telefone</option>
            <option value="neighborhood">Bairro</option>
          </select>
        </div>

        <Input onChange={this.insertText} />
        <button onClick={this.findList}>Pesquisar</button>
      </SearchClientStyle>
    );
  }
}

export { SearchClient }
export default SearchClient;
