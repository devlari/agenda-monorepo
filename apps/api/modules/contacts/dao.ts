import DAO from "../../common/dao";
import { Contact } from "../../models/Contact";
import { Contacts } from "../../modules/contacts/types";

export default class ContactsDAO extends DAO {
  private transform(dbData: any) {
    return dbData.map((contact: any) => ({
      id: contact.id,
      name: contact.nome,
      email: contact.email,
      phone: contact.telefone,
    }));
  }

  async getContacts() {
    const data = await this.query("SELECT * FROM contatos", []);

    return this.transform(data);
  }

  async getById(id: number) {
    const contact = await Contact.findByPk(id);

    if (!contact) {
      return false;
    }

    return contact;
  }

  async newContact(contact: Contacts) {
    const newContact = await Contact.create({
      nome: contact.name,
      telefone: contact.phone,
      email: contact.email,
    });

    return newContact;
  }

  async deleteContact(id: number) {
    const contact = await Contact.findByPk(id);

    if (!contact) {
      return false;
    }

    await contact.destroy();

    return true;
  }

  async updateContact(id: number, contact: Contacts) {
    const contactToUpdate = await Contact.findByPk(id);

    if (!contactToUpdate) {
      return false;
    }

    await contactToUpdate.update({
      nome: contact.name,
      telefone: contact.phone,
      email: contact.email,
    });

    return true;
  }
}
