import {makeAutoObservable} from "mobx";

class userChat {
  userChatId:number = 0
  constructor() {
    makeAutoObservable((this))
  }

  openUserChat(userId: number) {
    this.userChatId = userId
  }
}


export default new userChat()
