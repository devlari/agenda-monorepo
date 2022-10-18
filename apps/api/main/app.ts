import express from "express";
const app = express();
import cors from "cors";
import contactsRoutes from "../routes/contacts";

// middleware para o CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  app.use(cors);
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

contactsRoutes(app);

// // Rota não encontrada
// app.use((req, res, next) => {
//   const erro = new Error("Não foi encontrado seu pedido...");
//   next(erro);
// });

export default app;
