import ContactsDAO from "./dao";
import { Contacts } from "./types";

export default class ContactsService {
  private dao: ContactsDAO;

  constructor() {
    this.dao = new ContactsDAO();
  }

  async getContacts() {
    return this.dao.getContacts();
  }

  async getById(id: number) {
    return this.dao.getById(id);
  }

  async newContact(contact: Contacts) {
    return this.dao.newContact(contact);
  }

  async deleteContact(id: number) {
    return this.dao.deleteContact(id);
  }

  async updateContact(id: number, contact: Contacts) {
    return this.dao.updateContact(id, contact);
  }
}
