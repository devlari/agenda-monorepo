import ApiClient from "../../service/http-client";
import { Contact } from "./types";

export default class ContactsService {
  private ApiClient: ApiClient;

  constructor() {
    this.ApiClient = new ApiClient();
  }

  async post(contact: Contact) {
    return this.ApiClient.post("/contacts", contact);
  }

  async getById(id: number) {
    return this.ApiClient.get(`/contacts/${id}`);
  }

  async get() {
    return this.ApiClient.get("/contacts");
  }

  async put(contact: Contact) {
    return this.ApiClient.put(`/contacts/${contact.id}`, contact);
  }

  async delete(id: number) {
    return this.ApiClient.delete(`/contacts/${id}`);
  }
}
