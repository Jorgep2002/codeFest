
import {usersInterface} from '../types/usersInterface.js'

export default class IndexView {
 
  constructor () {
    
  }

  
  

  registrar = (registrar: (product: usersInterface) => void): void => {
    const btnAdd = document.getElementById("btnRegistro") as HTMLInputElement;
    btnAdd.addEventListener("click", () => {
      
        
      console.log("CLICK")
        
      });
    };
}
  
  




