import * as Logger from "bunyan";
import { Sequelize } from "sequelize-typescript";

import * as config from "config";



const logger = Logger.createLogger({name: "Sequelize"});


const sequelize = new Sequelize({
  database: config.get("database.schema"),
  dialect: "mysql",
  username: config.get("database.username"),
  password: config.get("database.password"),
  modelPaths: [ "/Users/Steve/Documents/ExpenseThis/dist/models" ],
  logging: logger.debug.bind(logger)
});

export default sequelize;
sequelize.authenticate();