import localforage from 'localforage';
import { create, persist } from 'mobx-persist';
import clientPersist from 'client-persist';
import SessionStore, { SessionSchema } from './sessionStore';
import ClientStore, { ClientSchema } from './clientStore';
import AppStore from './appStore';
import ModalStore from './modalStore';

const hydrate = create({
  storage: localforage,
  jsonify: false,
});

clientPersist.setDriver(clientPersist.SESSIONSTORAGE);

const hydrateSessionStorage = create({
  storage: clientPersist,
  jsonify: false,
});

class RootStore {
  sessionStore = new SessionStore(this);
  clientStore = new ClientStore(this);
  appStore = new AppStore(this);
  modalStore = new ModalStore(this);

  constructor() {
    const sessionStore = persist(SessionSchema)(this.sessionStore);
    const clientStore = persist(ClientSchema)(this.clientStore);

    hydrate('session', sessionStore);
    hydrateSessionStorage('client', clientStore);
  }
}

export default new RootStore();
