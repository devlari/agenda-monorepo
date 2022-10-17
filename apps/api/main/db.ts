/* eslint-disable turbo/no-undeclared-env-vars */
import { Sequelize } from "sequelize";

const configs = {
  database: process.env.PG_DATABASE ?? "",
  username: process.env.PG_USER ?? "",
  password: process.env.PG_PASSWORD ?? "",
  host: process.env.PG_HOST ?? "",
  port: process.env.PG_PORT ?? 3009,
};

const sequelize = new Sequelize("dbminhaagenda", "root", "root", {
  host: configs.host,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco realizada");
  })
  .catch((err) => {
    // console.log(err);
    console.log(configs.username);
  });

export { sequelize };
