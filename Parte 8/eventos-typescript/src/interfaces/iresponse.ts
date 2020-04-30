import { IEvento } from "./ievento";

export interface IResponse {
    accessToken?: string;
    evento?: IEvento;
    eventos?: IEvento[];
}
