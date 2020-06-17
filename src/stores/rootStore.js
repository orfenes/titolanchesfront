import localforage from 'localforage';
import { create, persist } from 'mobx-persist';
import SessionStore, { SessionSchema } from './sessionStore';
import ClientStore from './clientStore';
import AppStore from './appStore';
import ModalStore from './modalStore';

const hydrate = create({
  storage: localforage,
  jsonify: false,
});

class RootStore {
  sessionStore = new SessionStore(this);
  clientStore = new ClientStore(this);
  appStore = new AppStore(this);
  modalStore = new ModalStore(this);

  constructor() {
    const sessionStore = persist(SessionSchema)(this.sessionStore);

    hydrate('session', sessionStore);
  }
}

export default new RootStore();
