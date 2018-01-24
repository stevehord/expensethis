"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger = require("bunyan");
const sequelize_typescript_1 = require("sequelize-typescript");
const config = require("config");
const logger = Logger.createLogger({ name: "Sequelize" });
const sequelize = new sequelize_typescript_1.Sequelize({
    database: config.get("database.schema"),
    dialect: "mysql",
    username: config.get("database.username"),
    password: config.get("database.password"),
    modelPaths: ["/Users/Steve/Documents/ExpenseThis/dist/models"],
    logging: logger.debug.bind(logger)
});
exports.default = sequelize;
sequelize.authenticate();
//# sourceMappingURL=sequelize.js.map