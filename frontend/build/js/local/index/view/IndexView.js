export default class IndexView {
    constructor() {
        this.registrar = (registrar) => {
            const usuarioRegistro = document.getElementById("usuarioRegistro");
            const contraseñaRegistro = document.getElementById("contraseñaRegistro");
            const emailRegistro = document.getElementById("emailRegistro");
            const btnRegistro = document.getElementById("btnRegistro");
            btnRegistro.addEventListener("click", () => {
                const nombre = usuarioRegistro.value;
                const contraseña = contraseñaRegistro.value;
                const email = emailRegistro.value;
                const usuario = {
                    nombre,
                    email,
                    contraseña,
                };
                registrar(usuario);
            });
        };
        this.logIn = (logIn) => {
            const contraseñaLogin = document.getElementById("contraseñaLogin");
            const emailLogin = document.getElementById("usuarioLogin");
            const btnLogin = document.getElementById("btnLogin");
            btnLogin.addEventListener("click", () => {
                console.log("CLICK");
                const contraseña = contraseñaLogin.value;
                const email = emailLogin.value;
                const usuario = {
                    email,
                    contraseña,
                };
                logIn(usuario);
            });
        };
    }
}
