import express from "express";
const app = express();
app.use(express.json());
// import cors from "cors";

import contactsRoutes from "../routes/contacts";
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

contactsRoutes(app);

export default app;
