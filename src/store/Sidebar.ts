import {makeAutoObservable} from "mobx";

class Sidebar {
  visible = false
  constructor() {
  makeAutoObservable(this)
  }

  opened(){
    this.visible = true
  }

  closed() {
    this.visible = false
  }


}

export default new Sidebar()

