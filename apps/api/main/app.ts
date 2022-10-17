import express from "express";
const app = express();
import { sequelize } from "./db";
// import cors from "cors";

// import ContactsRoute from "./routes/contacts";

// app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(cors());

// ContactsRoute(app, pool);

export default app;
