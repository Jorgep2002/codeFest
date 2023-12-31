export default class IndexController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.registrar = (user) => {
            this.model.registrar(user);
        };
        this.logIn = (user) => {
            this.model.logIn(user);
        };
        this.init = () => {
        };
        console.log('IndexController constructor');
        this.view.registrar(this.registrar);
        this.view.logIn(this.logIn);
    }
}
