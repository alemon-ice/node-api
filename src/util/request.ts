import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRequestConfig extends AxiosRequestConfig {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IResponse<T = any> extends AxiosResponse<T> {}

export class Request {
  constructor(private request = axios) {}

  public get<T>(
    url: string,
    config: IRequestConfig = {}
  ): Promise<IResponse<T>> {
    return this.request.get<T, IResponse<T>>(url, config);
  }

  public static isRequestError(error: AxiosError): boolean {
    return !!(error.response && error.response.status);
  }
}
