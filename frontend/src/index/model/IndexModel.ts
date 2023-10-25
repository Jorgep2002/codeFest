import {usersInterface} from '../types/usersInterface.js'

export default class IndexModel {
 

  constructor() {
    console.log('IndexModel constructor');

  }

  registrar = async (user: usersInterface): Promise<void> => {
    console.log(user, "usuario modelo")
    console.log("MODELO REGISTRO")
    try {
      const apiUrl = 'http://localhost:1802/users';
    
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(user), 
      };
    
      const response = await fetch(apiUrl, requestOptions);
    
      if (!response.ok) {
        throw new Error('La solicitud no se pudo completar');
      }
    
      const responseData = await response.json(); 
      alert(responseData.message)
  
      return ;
    } catch (error) {
      console.error('Error:', error);
      alert(error)

      throw error;
    }
  };
}
