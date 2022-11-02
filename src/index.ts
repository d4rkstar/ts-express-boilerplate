import process from "process";
import App from "./App";
import * as dotenv from "dotenv";
import { logger } from "./lib/Logger";

dotenv.config();
const port = process.env.EXPRESS_PORT || 3000;
process.on("uncaughtException", (err) => {
  logger.error(`unhandled exception (kill) message: ${err.message}`);
  logger.error(`unhandled exception (kill) stack: ${err.stack}`);
  process.exit(1);
});
const app = new App();

App.openDatasources().then(() => {
  app.express.listen(port, (err: string): void => {
    if (err) {
      logger.error("error %s", err);
    }
    logger.info("Listening on port %d", port);
  });
})
  .catch(async (err) => {
    logger.error("error %s", err);
    await App.closeDatasource();
    process.exit(1);
  });