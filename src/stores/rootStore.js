import SessionStore from './sessionStore';

class RootStore {
  sessionStore = new SessionStore(this);
}

export default new RootStore();
