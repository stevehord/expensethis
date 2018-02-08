import sequelize from "../Sequelize";
import * as Bluebird from "bluebird";
import Logger from "../utils/Logger";
import User from "../models/User";
import Book from "../models/Book";

export default class ModelRepository {
    private static logger = new Logger("ModelRepository");

    static getModelById(model: any, id: number): Bluebird<{}> {
        // return sequelize.model("User").findById(id);
        return model.findById(id);
    }

    static getModelList(model: any, offset: number, limit: number = 200): Bluebird<{}> {
        return model.findAll({offset: offset, limit: limit});
    }

    static getModelListAndCount(model: any, offset: number, limit: number = 200): Bluebird<{}> {
        return model.findAndCountAll({offset: offset, limit: limit});
    }

    static getModelListByQuery(model: any, query: string): Bluebird<{}> {
        return model.findAll({});
    }

    static getModelListByOdataQuery(model: any, offset: number, limit: number = 200, query: any, include: any): Bluebird<{}> {
        return model.findAll({offset: offset, limit: limit});
    }

    static getModelListAndCountByOdataQuery(model: any, offset: number, limit: number = 200, query: any): Bluebird<{}> {
        return model.findAndCountAll({offset: offset, limit: limit, include: [{model: sequelize.model("Book")}]});
    }

    static updateOrInsertModel(modelName: string, model: any): Bluebird<{}> {
        return sequelize.model(modelName).upsert(model, {}).then(flag => {
            return new Bluebird<{}>((resolve, reject, onCancel) => {
                resolve(sequelize.model(modelName).findById(model.id));
            });
        });
    }

    static deleteModel(modelName: string, model: any): Bluebird<{}> {
        return sequelize.model(modelName).destroy(model);
    }
}