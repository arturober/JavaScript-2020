import {Http} from "./http.class";
import {SERVER} from "./constants";

export class Auth {
    static async login(email, password) {
        let resp = await Http.post(`${SERVER}/auth/login`, {email, password});
        localStorage.setItem("token", resp.accessToken);
    }

    static async register(userInfo) {
        await Http.post(`${SERVER}/auth/register`, userInfo);
    }

    static async checkToken() {
        await Http.get(`${SERVER}/auth/validate`);
    }

    static logout() {
        localStorage.removeItem("token");
    }
}
