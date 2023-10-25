import {usersInterface} from '../types/usersInterface.js'

export default class IndexView {
 
  constructor () {
    
  }

  registrar = (registrar: (product: usersInterface) => void): void => {
    const usuarioRegistro = document.getElementById("usuarioRegistro") as HTMLInputElement;
    const contraseñaRegistro = document.getElementById("contraseñaRegistro") as HTMLInputElement;
    const emailRegistro = document.getElementById("emailRegistro") as HTMLInputElement;

    const btnRegistro = document.getElementById("btnRegistro") as HTMLButtonElement;
    btnRegistro.addEventListener("click", () => {
      const nombre = usuarioRegistro.value;
      const contraseña = contraseñaRegistro.value;
      const email = emailRegistro.value;

      const usuario: usersInterface = {
        nombre,
        email,
        contraseña,
      };

      registrar(usuario);
    });
  }
  logIn = (logIn: (product: usersInterface) => void): void => {
    const contraseñaLogin = document.getElementById("contraseñaLogin") as HTMLInputElement;
    const emailLogin = document.getElementById("usuarioLogin") as HTMLInputElement;

    const btnLogin = document.getElementById("btnLogin") as HTMLButtonElement;
    btnLogin.addEventListener("click", () => {
      console.log("CLICK")
      const contraseña = contraseñaLogin.value;
      const email = emailLogin.value;

      const usuario: usersInterface = {
        email,
        contraseña,
      };

      logIn(usuario);
    });
  }
}
  




