import {makeAutoObservable} from "mobx";

class SidebarStore {
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

export default new SidebarStore()

