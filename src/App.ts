import express, { Express } from "express";
import { logger, weblogger } from "./lib/Logger";
import { BaseRouter, SampleRouter } from "./routes";
import { DataSource } from "typeorm";
import helmet from "helmet";
import * as dotenv from "dotenv";
import { defaultDataSource } from "./datasources";
import _ from "lodash";

dotenv.config();

class App {


  public express: Express;

  private static connections: DataSource[];

  public constructor() {
    logger.info("Starting App");

    this.express = express();

    this.express.use(weblogger);
    this.express.use(helmet());
    this.express.use(express.json());

    this.mountRoutes().then((): void => {
      logger.info("Routes ready!");
    });
  }

  public static async openDatasources(): Promise<void> {

    App.connections = [];

    if (_.toNumber(process.env.USE_TYPEORM)===0) return;

    const conn = defaultDataSource;
    await conn.initialize();
    App.connections.push(conn);
  }

  public static getDatasource(name?: string): DataSource | null {
    if (name === undefined || name === "") {
      name = "default";
    }
    let result: DataSource | null = null;

    this.connections.forEach((c) => {
      if (c.name === name) {
        result = c;
        return;
      }
    });
    return result;
  }

  public static async closeDatasource(): Promise<void> {
    try {
      if (this.connections !== undefined) {
        this.connections.forEach((c) => {
          c.destroy();
        });
      }
    } catch (e) {
      logger.debug(e);
    }
  }

  private async mountRoutes(): Promise<void> {
    const router = BaseRouter.init(express.Router());
    SampleRouter.init(router);
    this.express.use("/", router);
  }
}

export default App;
