import { Router } from 'express'
import usersController from '../controller/usersController'

export default class ProductsRouter {
  router: Router

  constructor (private readonly usersController: usersController) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.post('/users', this.usersController.storeUsers)
    this.router.post('/users/login', this.usersController.logUser)
    this.router.get('*', this.usersController.controlError)
  }
}
