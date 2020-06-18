import { action, decorate, observable, computed } from 'mobx';
import Fuse from 'fuse.js';
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
    this.searchValue = '';
    this.searchFilter = 'name'
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

  get getListClientData() {
    const clients = this.listClient;

    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        this.searchFilter,
      ],
    };

    if (this.searchValue !== '') {
      const fuse = new Fuse(clients, options);
      const findResults = fuse.search(this.searchValue);
      const result = findResults.map((obj) => {
        return obj.item;
      });

      return result;
    }

    return clients;
  }
}

decorate(ClientStore, {
  searchValue: observable,
  listClient: observable,
  client: observable,
  setClient: action,
  doRequestListClient: action,
  doRequestRemoveClient: action,
  getListClientData: computed,
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
