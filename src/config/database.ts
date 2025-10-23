import { DataSource, DataSourceOptions } from "typeorm";
import { option } from "./constants";

export const datasource = new DataSource({
  type: option.DATABASE_TYPE,
  host: option.DATABASE_HOST,
  port: option.DATABASE_PORT,
  username: option.DATABAS_USER,
  password: option.DATABASE_PASS,
  database: option.DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: [
    // TODO: adicionar as entidades aqui depois
  ],
  subscribers: [],
  migrations: [],
} as DataSourceOptions);

export const initializeDatabase = async () => {
  datasource
    .initialize()
    .then(() => console.log("[database] Initialization completed"))
    .catch(() => console.log("[database] Initialization failed"));
};
