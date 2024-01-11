import {makeAutoObservable} from 'mobx';
import {userData} from "../data/UserData";

class UserStore {
  users = userData;

  constructor() {
    makeAutoObservable(this);
  }

  setUserOnline(userId: number, online: boolean) {
    const user = this.users.find((u) => u.id === userId);
    if (user) user.online.status = online;
  }

  setTypingStatus(userId: number, isTyping: boolean) {
    const user = this.users.find((u) => u.id === userId);
    if (user) user.isTyping = isTyping;
  }

  incrementUnreadMessages(userId: number) {
    const user = this.users.find((u) => u.id === userId);

    if (user) {
      user.isTyping = false;
      user.unreadMessages += 1;
    }

  }

  resetUnreadMessages(userId: number) {
    const user = this.users.find((u) => u.id === userId);
    if (user) user.unreadMessages = 0;
  }
}

export default new UserStore();
