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
    this.redirectPage = this.redirectPage.bind(this);
    this.editClient = this.editClient.bind(this);
  }

  componentDidMount() {
    this.getListClient();
  }

  redirectPage() {
    this.getListClient();
  }

  getListClient = async () => {
    const {
      clientStore,
      appStore,
      modalStore,
    } = this.context;

    modalStore.toogleModalSucess(false);
    appStore.toggleloading(true);

    try {
      await clientStore.doRequestListClient();
      appStore.toggleloading(false);
    } catch (err) {
      appStore.toggleloading(false);
      modalStore.title = "Nao foi possivel carregar lista de cliente";
      modalStore.clearModalCallBack();
      modalStore.toogleModalSucess(true);
    }
  }

  editClient(client) {
    const {
      clientStore,
    } = this.context;
    // const {
    //   history,
    // } = this.state;

    // clientStore.setClient(client);
    // history.push()
  }

  removeClient = async (id) => {
    const {
      clientStore,
      appStore,
      modalStore,
    } = this.context;

    modalStore.toogleModalSucess(false);
    appStore.toggleloading(true);

    try {
      await clientStore.doRequestRemoveClient(id);
      appStore.toggleloading(false);
      modalStore.title = "Cadastro do cliente removido com sucesso";
      modalStore.clearModalCallBack();
      modalStore.setModalCallback(this.redirectPage);
      modalStore.toogleModalSucess(true);
    } catch (err) {
      appStore.toggleloading(false);
      modalStore.title = "Nao foi possivel remover o cadastro desse cliente";
      modalStore.clearModalCallBack();
      modalStore.toogleModalSucess(true);
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
            <Button className="bt" onClick={() => {this.editClient(client)}}>Editar</Button>
            <Button className="bt" onClick={() => {this.removeClient(client._id)}}>Excluir</Button>
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
