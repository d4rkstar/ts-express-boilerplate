import process from "process";
import App from "./App";
import * as dotenv from "dotenv";
import { logger } from "./lib/Logger";

dotenv.config();
const port = parseInt(process.env.EXPRESS_PORT || "3000");
const hostname = process.env.EXPRESS_HOST || "localhost";

process.on("uncaughtException", (err) => {
  logger.error(`unhandled exception (kill) message: ${err.message}`);
  logger.error(`unhandled exception (kill) stack: ${err.stack}`);
  process.exit(1);
});
const app = new App();

App.openDatasources().then(() => {
  app.express.listen(port, hostname, () => {
    logger.info(`Listening on ${hostname}:${port}`);
  });
})
  .catch(async () => {
    await App.closeDatasource();
    process.exit(1);
  });
