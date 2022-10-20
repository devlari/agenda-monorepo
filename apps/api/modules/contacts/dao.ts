import DAO from "../../common/dao";
import { Contact } from "../../models/Contact";
import { Contacts, ContactsDB } from "../../modules/contacts/types";

export default class ContactsDAO extends DAO {
  private transform(dbData: any) {
    return {
      id: dbData.id,
      name: dbData.nome,
      email: dbData.email,
      phone: dbData.telefone,
      createdAt: dbData.createdAt,
      updatedAt: dbData.updatedAt,
    };
  }

  async getContacts() {
    const data = await this.query(
      "SELECT * FROM contatos ORDER BY nome ASC",
      []
    );

    return data.map((contact: any) => {
      return this.transform(contact);
    });
  }

  async getById(id: number) {
    const contact = await Contact.findByPk(id);

    if (!contact) {
      return false;
    }

    return this.transform(contact);
  }

  async newContact(contact: Contacts) {
    try {
      const newContact = await Contact.create({
        nome: contact.name,
        telefone: contact.phone,
        email: contact.email,
      });

      return newContact;
    } catch (e) {
      throw new Error(`${e}`);
    }
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
