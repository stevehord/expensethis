"use strict";
// import * as express from "express";
// import * as compression from "compression";  // compresses requests
// import * as session from "express-session";
// import * as bodyParser from "body-parser";
// import * as logger from "morgan";
Object.defineProperty(exports, "__esModule", { value: true });
// import  userController from "./controllers/UserController";
// const seq = new Sequelize({
//     database: "expenseThis",
//     dialect: "mysql",
//     username: "root",
//     password: "Telem@rk8",
//     modelPaths: [ "/Users/Steve/eclipse-workspace/TrackThis/dist/models" ]
// });
// const uc = new userController();
// // Create Express server
// const app = express();
// app.set("port", 3000);
// app.get("/User", uc.getUserModel);
// // app.get("/Model", uc.getModel);
// module.exports = app;
require("reflect-metadata"); // this shim is required
const routing_controllers_1 = require("routing-controllers");
const BookController_1 = require("./controllers/BookController");
const ModelController_1 = require("./controllers/ModelController");
// import * as Logger from "bunyan";
const config = require("config");
const Logger_1 = require("./utils/Logger");
const log4js = require("log4js");
log4js.configure("./config/log4js.json");
const logger = new Logger_1.default("App");
// creates express app, registers all controller routes and returns you express app instance
const app = routing_controllers_1.createExpressServer({
    classTransformer: false,
    // defaultErrorHandler: false,
    controllers: [BookController_1.default, ModelController_1.default] // we specify controllers we want to use
});
app.use(log4js.connectLogger(log4js.getLogger("Express"), {}));
app.listen(3001);
logger.debug(process.env.PORT);
logger.debug(process.env.HOME);
logger.debug("Debugging from the app");
logger.error("checking out an error");
logger.debug("CONFIG: " + config.get("port"));
module.exports = app;
//# sourceMappingURL=App.js.map