import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Context from '../../stores/context';
import {
  ListClientStyle,
} from '../../style';
import {
  Button,
} from 'rebass';
class ListClient extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.getListClient = this.getListClient.bind(this);
    this.renderListClient = this.renderListClient.bind(this);
  }

  componentDidMount() {
    this.getListClient();
  }

  getListClient = async () => {
    const {
      clientStore,
    } = this.context;

    try {
      await clientStore.doRequestListClient();
    } catch (err) {
      console.log('deu muito ruim', err);
    }
  }

  renderListClient() {
    const {
      clientStore,
    } = this.context;
    console.log(clientStore.listClient);
    return clientStore.listClient.map((client, index) => {
      return (
        <li key={index} className="item-client">
          <div className="wrapper-info-client">
            <h4 className="name-client">Nome: <span className="info-name-client">{client.name}</span></h4>
            <div className="wrapper-address">
              <p className="info-client">Endereço: {client.address}</p>
              <p className="info-client">Numero: {client.number}</p>
              <p className="info-client">Complemento: {client.complement}</p>
              <p className="info-client">Bairro: {client.neighborhood}</p>
            </div>
            <div className="fone">Telefone: {client.telephone}</div>
          </div>
          <div className="wrapper-buttons">
            <Button className="bt">Editar</Button>
            <Button className="bt">Excluir</Button>
          </div>
        </li>
      );
    });
  }


  render() {
    return (
      <ListClientStyle>
        {this.renderListClient()}
      </ListClientStyle>
    );
  }
}

export { ListClient };
export default observer(ListClient);
