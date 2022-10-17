/* eslint-disable turbo/no-undeclared-env-vars */
import http from "http";
const port = 3009;
import app from "./app";
import { sequelize } from "./db";
import { Contact } from "../modules/contacts/Contact";

const server = http.createServer(app);
server.listen(port);

app.listen(3001, () => {
  console.log("Server started on port 3001");
});

app.get("/", async (req, res) => {
  const result = await sequelize.query("SELECT * FROM contatos");

  res.send(result[0]);
});

app.post("/contact", async (req, res) => {
  const { name, phone, email } = req.body;

  const contact = await Contact.create({
    nome: name,
    telefone: phone,
    email: email,
  });

  res.send(contact);
});
