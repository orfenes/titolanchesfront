import { action, decorate, observable } from 'mobx';
import {
  getListClient as getListClientApi,
  postRegisterCliente as postRegisterClienteApi,
  deleteRegisterCliente as deleteRegisterClienteApi,
  postUpddateRegisterCliente as postUpddateRegisterClienteApi,
} from '../service/api';

class ClientStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.listClient = [];
    this.client = {};
  }

  setClient(client) {
    this.client = client;
  }

  setListClient(listClient) {
    this.listClient = listClient;
  }

  doRequestListClient(params) {
    const promiseLogin = async (resolve, reject) => {
      try {
        const res = await getListClientApi(params, this.rootStore.sessionStore.token);
        this.setListClient(res.data);
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    };

    return new Promise((resolve, reject) => promiseLogin(resolve, reject));
  }

  doRequestRegisterClient(data) {
    const promiseLogin = async (resolve, reject) => {
      try {
        const res = await postRegisterClienteApi({
          body: data,
        }, this.rootStore.sessionStore.token);
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    };

    return new Promise((resolve, reject) => promiseLogin(resolve, reject));
  }

  postUpddateRegisterClienteApi(params) {
    const promiseLogin = async (resolve, reject) => {
      try {
        const res = await postUpddateRegisterClienteApi({
          id: params.id,
          body: params.data,
        }, this.rootStore.sessionStore.token);
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    };

    return new Promise((resolve, reject) => promiseLogin(resolve, reject));
  }

  doRequestRemoveClient(data) {
    const promiseLogin = async (resolve, reject) => {
      try {
        const res = await deleteRegisterClienteApi({
          id: data,
        }, this.rootStore.sessionStore.token);
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    };

    return new Promise((resolve, reject) => promiseLogin(resolve, reject));
  }
}


decorate(ClientStore, {
  listClient: observable,
  client: observable,
  setClient: action,
  doRequestListClient: action,
  doRequestRemoveClient: action,
});

export const ClientSchema = {
  client: {
    type: 'object',
    schema: {
      id: true,
      name: true,
      address: true,
      number: true,
      neighborhood: true,
      complement: true,
      telephone:  true,
    }
  },
};

export default ClientStore;
