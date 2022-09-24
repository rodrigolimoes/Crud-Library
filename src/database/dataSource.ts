import { DataSource } from "typeorm";
import { BookEntity } from "./entity/bookEntity";

export const appDataSource = new DataSource({
  type: "postgres",
  host: process.env["DB_SERVER"] || "",
  port: ~~process.env["DB_PORT"] || 5432,
  username: process.env["DB_USERNAME"] || "",
  password: process.env["DB_PASSWORD"] || "",
  database: process.env["DB"],
  synchronize: true,
  logging: true,
  entities: [BookEntity],
  subscribers: [],
  migrations: [],
});
