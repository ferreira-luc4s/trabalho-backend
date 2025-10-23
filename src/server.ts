import "reflect-metadata";
import { initializeDatabase, option } from "./config";
import Express from "express";
import { routes } from "./routes/route";

const main = () => {
  initializeDatabase();

  const app = Express();

  app.use("/", routes);

  app.listen(
    option.PORT,
    () => `[server] Listen server on port: ${option.PORT} `
  );
};

main();
