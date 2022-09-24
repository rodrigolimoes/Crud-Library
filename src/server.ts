import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import "reflect-metadata";
import { router } from "./routes";
import { appDataSource } from "./database/dataSource";

const PORT = process.env["PORT"] || 4000;
const app = express();

app.use(router);

export const connectServer = async () => {
  try {
    await appDataSource.initialize();
    app.listen(PORT, () =>
      console.log(`Running server at http://localhost:${PORT}/`)
    );
  } catch (e) {
    throw e;
  }
};
