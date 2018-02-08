"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const Logger_1 = require("../utils/Logger");
const Bluebird = require("bluebird");
const ModelRepository_1 = require("../repositories/ModelRepository");
const ModelFactory_1 = require("../ModelFactory");
let ModelController = ModelController_1 = class ModelController {
    getOneModel(modelName, id, res) {
        if (res.headersSent) {
            return new Bluebird((resolve, reject, onCancel) => { });
        }
        ModelController_1.logger.info("getOneModel (" + modelName + ": " + id + ")");
        return ModelRepository_1.default.getModelById(ModelFactory_1.default.getClass(modelName), id);
    }
    getModelList(modelName, offset, limit, view, res) {
        if (res.headersSent) {
            return new Bluebird((resolve, reject, onCancel) => { });
        }
        ModelController_1.logger.info("getModelList (" + modelName + ": " + offset + ": " + limit + ": " + view + ")");
        if (view === ModelController_1.RAW) {
            return ModelRepository_1.default.getModelList(ModelFactory_1.default.getClass(modelName), offset, limit);
        }
        else {
            return ModelRepository_1.default.getModelListAndCount(ModelFactory_1.default.getClass(modelName), offset, limit);
        }
    }
    getModeOdatalList(modelName, skip, top, filter, expand, view, res) {
        if (res.headersSent) {
            return new Bluebird((resolve, reject, onCancel) => { });
        }
        ModelController_1.logger.info("getModeOdatalListAndCount (" + modelName + ": " + skip + ": " + top + ": " + view + ")");
        if (view === ModelController_1.RAW) {
            return ModelRepository_1.default.getModelListByOdataQuery(ModelFactory_1.default.getClass(modelName), skip, top, {}, {});
        }
        else {
            return ModelRepository_1.default.getModelListAndCountByOdataQuery(ModelFactory_1.default.getClass(modelName), skip, top, { where: { id: 1 } });
        }
    }
    postModel(modelName, id, model, res) {
        if (res.headersSent) {
            return new Bluebird((resolve, reject, onCancel) => { });
        }
        // TODO: SNH - make sure the id and the Model.id match
        ModelController_1.logger.info("postModel (" + modelName + ": " + id + ": " + model + ")");
        return ModelRepository_1.default.updateOrInsertModel(ModelFactory_1.default.getClass(modelName), model);
    }
    putModel(modelName, id, model, res) {
        if (res.headersSent) {
            return new Bluebird((resolve, reject, onCancel) => { });
        }
        // TODO: SNH - make sure the id and the Model.id match
        ModelController_1.logger.info("putModel (" + modelName + ": " + id + ": " + model + ")");
        return ModelRepository_1.default.updateOrInsertModel(ModelFactory_1.default.getClass(modelName), model);
    }
};
ModelController.logger = new Logger_1.default("ModelController");
ModelController.RAW = "raw";
__decorate([
    routing_controllers_1.Get("/api/:model/:id"),
    __param(0, routing_controllers_1.Param("model")), __param(1, routing_controllers_1.Param("id")), __param(2, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", Bluebird)
], ModelController.prototype, "getOneModel", null);
__decorate([
    routing_controllers_1.Get("/api/:model"),
    __param(0, routing_controllers_1.Param("model")),
    __param(1, routing_controllers_1.QueryParam("offset")),
    __param(2, routing_controllers_1.QueryParam("limit")),
    __param(3, routing_controllers_1.QueryParam("view")),
    __param(4, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, String, Object]),
    __metadata("design:returntype", Bluebird)
], ModelController.prototype, "getModelList", null);
__decorate([
    routing_controllers_1.Get("/query/:model"),
    __param(0, routing_controllers_1.Param("model")),
    __param(1, routing_controllers_1.QueryParam("$skip")),
    __param(2, routing_controllers_1.QueryParam("$top")),
    __param(3, routing_controllers_1.QueryParam("$filter")),
    __param(4, routing_controllers_1.QueryParam("$expand")),
    __param(5, routing_controllers_1.QueryParam("view")),
    __param(6, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, String, String, String, Object]),
    __metadata("design:returntype", Bluebird)
], ModelController.prototype, "getModeOdatalList", null);
__decorate([
    routing_controllers_1.Post("/:model/:id"),
    __param(0, routing_controllers_1.Param("model")),
    __param(1, routing_controllers_1.Param("id")),
    __param(2, routing_controllers_1.Body({ required: true })),
    __param(3, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object, Object]),
    __metadata("design:returntype", Bluebird)
], ModelController.prototype, "postModel", null);
__decorate([
    routing_controllers_1.Put("/:model/:id"),
    __param(0, routing_controllers_1.Param("model")),
    __param(1, routing_controllers_1.Param("id")),
    __param(2, routing_controllers_1.Body({ required: true })),
    __param(3, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object, Object]),
    __metadata("design:returntype", Bluebird)
], ModelController.prototype, "putModel", null);
ModelController = ModelController_1 = __decorate([
    routing_controllers_1.JsonController()
], ModelController);
exports.default = ModelController;
var ModelController_1;
//# sourceMappingURL=ModelController.js.map