import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'
import {usersInterface} from '../types/usersInterface.js'


export default class IndexController {
  constructor (private readonly model: IndexModel, private readonly view: IndexView) {
    console.log('IndexController constructor')
    this.view.registrar(this.registrar);
    this.view.logIn(this.logIn);


  }

  registrar =(user:usersInterface):void=>{
    this.model.registrar(user)
  }
  logIn = (user:usersInterface):void=>{
    this.model.logIn(user)
  }
  init = (): void => {
  }
}
