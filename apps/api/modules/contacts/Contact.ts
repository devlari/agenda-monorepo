import { INTEGER, STRING } from "sequelize";
import { sequelize as bd } from "../../main/db";

const Contact = bd.define("contato", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: STRING,
    allowNull: false,
  },
  telefone: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: true,
  },
});

Contact.sync();

export { Contact };
