import { usersInterface } from '../types/usersInterface'

import fs from 'fs';

export default class ProductsModel {
  addUser = async(product:usersInterface):Promise<void>=>{
    console.log(product)
    return await new Promise((resolve, reject) => {
      try {
        const filePath = './src/users/database/users.json';
        const currentData = fs.readFileSync(filePath, 'utf-8');
        const products = JSON.parse(currentData);
        products.push(product);
        
        fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf-8');
        resolve(products)
      } catch (error) {
        reject(error)
      }
    })
  }
 
}
