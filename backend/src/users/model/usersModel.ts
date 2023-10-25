import { usersInterface } from '../types/usersInterface'

import fs from 'fs';

export default class ProductsModel {
  addUser = async(user:usersInterface):Promise<void>=>{
    console.log(user)
    return await new Promise((resolve, reject) => {
      try {
        const filePath = './src/users/database/users.json';
        const currentData = fs.readFileSync(filePath, 'utf-8');
        const products = JSON.parse(currentData);
        products.push(user);
        
        fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf-8');
        resolve(products)
      } catch (error) {
        reject(error)
      }
    })
  }
  logUser = async (email: string, contraseña: string): Promise<usersInterface | null> => {
    return new Promise((resolve, reject) => {
      try {
        const filePath = './src/users/database/users.json';
        const currentData = fs.readFileSync(filePath, 'utf-8');
        const users = JSON.parse(currentData);
  
        // Buscar el usuario con el email proporcionado
        const user = users.find((u: usersInterface) => u.email === email);
  
        if (user && user.contraseña === contraseña) {
          // Usuario encontrado y contraseña coincidente
          resolve(user);
        } else {
          // Usuario no encontrado o contraseña incorrecta
          resolve(null);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}