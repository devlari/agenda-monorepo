export type Contacts = {
  id?: number;
  name: string;
  phone: string;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ContactsDB = {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};
