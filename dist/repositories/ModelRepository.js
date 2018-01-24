"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../sequelize");
class ModelRepository {
    // private className: string;
    // constructor(cls: { new(): T }) {
    //     this.className = cls.name;
    // }
    static getModelById(modelName, id) {
        return sequelize_1.default.model(modelName).findById(id);
    }
    static getModelList(modelName, offset, limit = 200) {
        return sequelize_1.default.model(modelName).findAll({ offset: offset, limit: limit });
    }
    static getModelListByQuery(modelName, query) {
        return sequelize_1.default.model(modelName).findAll({});
    }
    static postModel(modelName, model) {
        return sequelize_1.default.model(modelName).insertOrUpdate(model, {});
    }
    static deleteModel(modelName, model) {
        return sequelize_1.default.model(modelName).destroy(model);
    }
}
exports.default = ModelRepository;
//# sourceMappingURL=ModelRepository.js.map