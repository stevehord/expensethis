import * as errorHandler from "errorhandler";
import Logger from "./utils/Logger";

const app = require("./App");
const logger = new Logger("App");


/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  logger.info(("  App is running at http://localhost:%d in %s mode"), server.address().port, app.get("ENV"));
  logger.info("  Press CTRL-C to stop\n");
});

export = server;