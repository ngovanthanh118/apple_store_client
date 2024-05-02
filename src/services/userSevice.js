import AxiosService from ".";
class UserService {
    service;
    constructor() {
        this.service = AxiosService;
    }
    async signIn(payload) {
        return this.service.post('/users/login', payload);
    }
    async signUp(payload) {
        return this.service.post('/users/register', payload);
    }
}
export default new UserService();