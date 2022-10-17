/* eslint-disable turbo/no-undeclared-env-vars */
import http from "http";
const port = 3009;
import app from "./app";
import * as dotenv from "dotenv";
dotenv.config();

const server = http.createServer(app);
server.listen(port);

app.listen(3001, () => {
  console.log("Server started on port 3001");
});

app.get("/", async (req, res) => {
  res.send("Hello");
});

app.post("/contact", async (req, res) => {
  res.send("Hello");
});
