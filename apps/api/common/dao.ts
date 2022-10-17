import { sequelize } from "../main/db";
import { QueryTypes } from "sequelize";
export default class DAO {
  public connection = null;

  async execSQL(sql: string, params: unknown[]): Promise<void> {
    await sequelize.query(sql, {
      type: QueryTypes.INSERT,
    });
  }

  async query(sql: string, params: unknown[]): Promise<unknown[]> {
    const dbData = await sequelize.query(sql, {
      type: QueryTypes.SELECT,
    });

    if (!dbData) {
      return [];
    }

    return dbData;
  }
}
