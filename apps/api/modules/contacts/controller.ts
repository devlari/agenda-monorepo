import { HttpStatus } from "../../common/types";
import ContactsService from "./service";
import { Contacts } from "./types";

export default class ContactsController {
  private service: ContactsService;

  constructor() {
    this.service = new ContactsService();
  }

  async getContacts() {
    const contacts = await this.service.getContacts();
    return contacts;
  }

  async getById(id: number) {
    const contact = await this.service.getById(id);

    if (!contact) {
      return HttpStatus.NOT_FOUND;
    }

    return contact;
  }

  async newContact(contact: Contacts) {
    if (!contact.name || !contact.phone) {
      return HttpStatus.BAD_REQUEST;
    }

    const newContact = await this.service.newContact(contact);

    return newContact;
  }

  async deleteContact(id: number) {
    const deleted = await this.service.deleteContact(id);

    if (!deleted) {
      return HttpStatus.BAD_REQUEST;
    }

    return HttpStatus.CREATED;
  }

  async updateContact(id: number, contact: Contacts) {
    const updated = await this.service.updateContact(id, contact);

    if (!updated) {
      return HttpStatus.BAD_REQUEST;
    }

    return HttpStatus.CREATED;
  }
}
