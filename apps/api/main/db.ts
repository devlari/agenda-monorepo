/* eslint-disable turbo/no-undeclared-env-vars */
import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const configs = {
  database: process.env.DATABASE ?? "",
  username: process.env.USER ?? "",
  password: process.env.PASSWORD ?? "",
  host: process.env.HOST ?? "",
  port: process.env.PORT ?? 3009,
};

const sequelize = new Sequelize(
  configs.database,
  configs.username,
  configs.password,
  {
    host: configs.host,
    dialect: "mysql",
  }
);

export { sequelize };
