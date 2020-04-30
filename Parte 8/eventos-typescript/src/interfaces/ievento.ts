import { IUsuario } from "./iusuario";

export interface IEvento {
    id?: number
    name: string;
    date: string;
    description: string;
    image: string;
    price: number;
    creator?: IUsuario;
}
