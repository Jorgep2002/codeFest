var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class IndexModel {
    constructor() {
        this.registrar = (user) => __awaiter(this, void 0, void 0, function* () {
            console.log("MODELO REGISTRO");
            try {
                const apiUrl = 'http://localhost:1802/users';
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                };
                const response = yield fetch(apiUrl, requestOptions);
                if (!response.ok) {
                    throw new Error('La solicitud no se pudo completar');
                }
                const responseData = yield response.json();
                console.log('Respuesta del servidor:', responseData);
                return;
            }
            catch (error) {
                console.error('Error:', error);
                throw error;
            }
        });
        console.log('IndexModel constructor');
    }
}
