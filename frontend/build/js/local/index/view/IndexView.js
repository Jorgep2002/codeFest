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
    }
}
