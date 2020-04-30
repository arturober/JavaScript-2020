import {Http} from "./http.class";
import {SERVER} from "../constants";
import { IUsuario } from "../interfaces/iusuario";

export class Auth {
    static async login(email: string, password: string): Promise<void> {
        let resp = await Http.post(`${SERVER}/auth/login`, {email, password});
        localStorage.setItem("token", resp.accessToken);
    }

    static async register(userInfo: IUsuario): Promise<void> {
        await Http.post(`${SERVER}/auth/register`, userInfo);
    }

    static async checkToken(): Promise<void> {
        await Http.get(`${SERVER}/auth/validate`);
    }

    static logout(): void {
        localStorage.removeItem("token");
    }
}
