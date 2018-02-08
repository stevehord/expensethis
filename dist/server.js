"use strict";
const errorHandler = require("errorhandler");
const Logger_1 = require("./utils/Logger");
const app = require("./App");
const logger = new Logger_1.default("App");
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
module.exports = server;
//# sourceMappingURL=Server.js.map