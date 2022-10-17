export default class DAO {
  public connection = null;

  constructor(public readonly connectionPool) {}

  async openConnection(): Promise<void> {}

  async closeConnection(): Promise<void> {}

  async execSQL(sql: string, params: unknown[], commit = true): Promise<void> {}

  //   async query<T = unknown>(sql: string, params: unknown[]): Promise<T[]> {}

  //   async queryOne<T = unknown>(
  //     sql: string,
  //     params: unknown[]
  //   ): Promise<T | null> {}
}
