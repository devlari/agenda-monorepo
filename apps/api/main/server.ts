/* eslint-disable turbo/no-undeclared-env-vars */
import http from "http";
const port = 3009;
import app from "./app";

const server = http.createServer(app);
server.listen(port);

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
