import express from "express";
const app = express();
import cors from "cors";
import contactsRoutes from "../routes/contacts";

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

contactsRoutes(app);

// // Rota não encontrada
// app.use((req, res, next) => {
//   const erro = new Error("Não foi encontrado seu pedido...");
//   next(erro);
// });

export default app;
