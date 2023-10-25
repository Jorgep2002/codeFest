import { Request, Response } from 'express'
import usersModel from '../model/usersModel'
import { usersInterface } from '../types/usersInterface'

export default class ProductsController {
  constructor (private readonly usersModel: usersModel) { }

 
  
  storeUsers = (req: Request, res: Response) => {
    console.log(req.body)
      try {
        const { nombre, email, contraseña} = req.body;

        console.log('nombre:', nombre);
        console.log('usuario:', email);
        console.log('email:', contraseña);
        const usuario= {
          nombre,
          email,
          contraseña,
        };

        this.usersModel.addUser(usuario).then(() => {
            res.status(200).json({ message: 'Has sido registrado  con éxito' });
          })
          .catch((err: Error) => {
            res.status(500).json({ message: 'Error en el registro', error: err.message });
          });
      } catch (error) {
        res.status(400).json({ message: 'Datos invalidos', error});
      }

  };
  controlError = (_: Request, res: Response): void => {
    res.status(404).json({ error: 'Not Found' })
  }
  logUser = (req: Request, res: Response) => {
    try {
      const { email, contraseña } = req.body;
  
      this.usersModel.logUser(email, contraseña)
        .then((user: usersInterface | null) => {
          if (user) {
            // Usuario autenticado con éxito
            res.status(200).json({ message: 'Has iniciado sesión con éxito', user });
          } else {
            // Usuario no encontrado o contraseña incorrecta
            res.status(401).json({ message: 'Credenciales incorrectas. Inicio de sesión fallido' });
          }
        })
        .catch((err: Error) => {
          res.status(500).json({ message: 'Error en el inicio de sesión', error: err.message });
        });
    } catch (error) {
      res.status(400).json({ message: 'Datos inválidos', error });
    }
  };
  
}
