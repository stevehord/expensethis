// import * as express from "express";
// import * as compression from "compression";  // compresses requests
// import * as session from "express-session";
// import * as bodyParser from "body-parser";
// import * as logger from "morgan";


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

import "reflect-metadata"; // this shim is required
import { createExpressServer } from "routing-controllers";
import BookController from "./controllers/BookController";
import ModelController from "./controllers/ModelController";

// import * as Logger from "bunyan";
import * as config from "config";
import Logger from "./utils/Logger";
import * as log4js  from "log4js";


log4js.configure("./config/log4js.json");
const logger = new Logger("App");

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
    classTransformer: false,
    // defaultErrorHandler: false,
    controllers: [BookController, ModelController] // we specify controllers we want to use
});

app.use(log4js.connectLogger(log4js.getLogger("Express"), {}));
app.listen(3001);


logger.debug(process.env.PORT);
logger.debug(process.env.HOME);
logger.debug("Debugging from the app");
logger.error("checking out an error");


logger.debug("CONFIG: " + config.get("port"));

module.exports = app;