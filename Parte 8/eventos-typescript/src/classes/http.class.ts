import { IResponse } from "../interfaces/iresponse";

export class Http {
  static async ajax(
    method: string,
    url: string,
    headers: any = {},
    body: string = null
  ): Promise<IResponse> {
    const token = localStorage.getItem("token");
    if (token) headers.Authorization = "Bearer " + token;

    const resp = await fetch(url, { method, headers, body });
    if (!resp.ok) throw new Error(resp.statusText);
    return resp.json(); // promise
  }

  static get(url: string): Promise<IResponse>  {
    return Http.ajax("GET", url);
  }

  static post(url: string, data: any): Promise<IResponse>  {
    return Http.ajax(
      "POST",
      url,
      {
        "Content-Type": "application/json",
      },
      JSON.stringify(data)
    );
  }

  static put(url: string, data: any): Promise<IResponse>  {
    return Http.ajax(
      "PUT",
      url,
      {
        "Content-Type": "application/json",
      },
      JSON.stringify(data)
    );
  }

  static delete(url: string): Promise<IResponse> {
    return Http.ajax("DELETE", url);
  }
}
