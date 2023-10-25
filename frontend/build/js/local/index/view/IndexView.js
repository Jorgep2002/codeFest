export default class IndexView {
    constructor() {
        this.registrar = (registrar) => {
            const btnAdd = document.getElementById("btnRegistro");
            btnAdd.addEventListener("click", () => {
                console.log("CLICK");
            });
        };
    }
}
