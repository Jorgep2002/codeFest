import express, { Application } from 'express'
import path from 'path'
import dotenv from 'dotenv'

import UsersRouter from './route/usersRouter'
import UsersController from './controller/usersController'
import UsersModel from './model/usersModel'

class Server {
  users: Application

  constructor (private readonly usersRouter: UsersRouter) {
    this.users = express()
    this.config()
    this.route()
  }

  config = (): void => {
    dotenv.config({
      path: path.join(__dirname, '../../config/.env.development')
    })
    this.users.use(express.json())
    this.users.use(express.urlencoded({ extended: true }))
  }


  route = (): void => {
    this.users.use('/', this.usersRouter.router)
    this.users.use('*', this.usersRouter.router)
  }

  start = (): void => {
    const PORT = process.env.PORT ?? 3000
    const HOST = process.env.HOST ?? 'localhost'
    this.users.listen(PORT, () => {
      console.info(`SERVER: http://${HOST}:${PORT}`)
    })
  }
}

const server = new Server(new UsersRouter(new UsersController(new UsersModel())))
server.start()
