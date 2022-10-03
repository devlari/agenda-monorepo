import { AxiosInstance, AxiosRequestConfig } from "axios";
import { getAxiosClient } from "./axios";
export default class ApiClient {
  public axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = getAxiosClient();
  }

  async post<T = any>(
    url: string,
    data = {},
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    return this.axiosInstance
      .post(url, data, options)
      .then((response) => response.data as T);
  }

  async get<T = any>(url: string, data = {}): Promise<T> {
    return this.axiosInstance
      .get(url, data)
      .then((response) => response.data as T);
  }

  async put<T = any>(url: string, data = {}): Promise<T> {
    return this.axiosInstance
      .put(url, data)
      .then((response) => response.data as T);
  }

  async patch<T = any>(url: string, data = {}): Promise<T> {
    return this.axiosInstance
      .patch(url, data)
      .then((response) => response.data as T);
  }

  async delete<T = any>(url: string, data = {}): Promise<T> {
    return this.axiosInstance
      .delete(url, data)
      .then((response) => response.data as T);
  }
}
