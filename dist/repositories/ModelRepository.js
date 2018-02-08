"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("../Sequelize");
const Bluebird = require("bluebird");
const Logger_1 = require("../utils/Logger");
class ModelRepository {
    static getModelById(model, id) {
        // return sequelize.model("User").findById(id);
        return model.findById(id);
    }
    static getModelList(model, offset, limit = 200) {
        return model.findAll({ offset: offset, limit: limit });
    }
    static getModelListAndCount(model, offset, limit = 200) {
        return model.findAndCountAll({ offset: offset, limit: limit });
    }
    static getModelListByQuery(model, query) {
        return model.findAll({});
    }
    static getModelListByOdataQuery(model, offset, limit = 200, query, include) {
        return model.findAll({ offset: offset, limit: limit });
    }
    static getModelListAndCountByOdataQuery(model, offset, limit = 200, query) {
        return model.findAndCountAll({ offset: offset, limit: limit, include: [{ model: Sequelize_1.default.model("Book") }] });
    }
    static updateOrInsertModel(modelName, model) {
        return Sequelize_1.default.model(modelName).upsert(model, {}).then(flag => {
            return new Bluebird((resolve, reject, onCancel) => {
                resolve(Sequelize_1.default.model(modelName).findById(model.id));
            });
        });
    }
    static deleteModel(modelName, model) {
        return Sequelize_1.default.model(modelName).destroy(model);
    }
}
ModelRepository.logger = new Logger_1.default("ModelRepository");
exports.default = ModelRepository;
//# sourceMappingURL=ModelRepository.js.map