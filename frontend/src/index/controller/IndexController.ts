import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'
import {usersInterface} from '../types/usersInterface.js'


export default class IndexController {
  constructor (private readonly model: IndexModel, private readonly view: IndexView) {
    console.log('IndexController constructor')
    this.view.registrar(this.registrar);


  }

  registrar =(user:usersInterface):void=>{
    this.model.registrar(user)
  }

  init = (): void => {
  }
}
