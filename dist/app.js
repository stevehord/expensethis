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
// creates express app, registers all controller routes and returns you express app instance
const app = routing_controllers_1.createExpressServer({
    classTransformer: false,
    // defaultErrorHandler: false,
    controllers: [BookController_1.default, ModelController_1.default] // we specify controllers we want to use
});
// Logger.createLogger({}).level = Logger.DEBUG;
// run express application on port 3000
app.listen(3000);
console.log(process.env.PORT);
console.log(process.env.HOME);
module.exports = app;
//# sourceMappingURL=app.js.map