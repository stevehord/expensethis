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
const ModelRepository_1 = require("../repositories/ModelRepository");
const Bluebird = require("bluebird");
let ModelController = class ModelController {
    getOneModel(modelName, id, res) {
        if (res.headersSent) {
            return new Bluebird((resolve, reject, onCancel) => { });
        }
        return ModelRepository_1.default.getModelById(modelName, id);
    }
    getModelList(modelName, offset, limit, res) {
        if (res.headersSent) {
            return new Bluebird((resolve, reject, onCancel) => { });
        }
        return ModelRepository_1.default.getModelList(modelName, offset, limit);
    }
    postModel(modelName, id, model, res) {
        if (res.headersSent) {
            return new Bluebird((resolve, reject, onCancel) => { });
        }
        // TODO: SNH - make sure the id and the Model.id match
        return ModelRepository_1.default.postModel(modelName, model);
    }
    putModel(modelName, id, model, res) {
        if (res.headersSent) {
            return new Bluebird((resolve, reject, onCancel) => { });
        }
        // TODO: SNH - make sure the id and the Model.id match
        return ModelRepository_1.default.postModel(modelName, model);
    }
};
__decorate([
    routing_controllers_1.Get("/:model/:id"),
    __param(0, routing_controllers_1.Param("model")), __param(1, routing_controllers_1.Param("id")), __param(2, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", void 0)
], ModelController.prototype, "getOneModel", null);
__decorate([
    routing_controllers_1.Get("/:model"),
    __param(0, routing_controllers_1.Param("model")), __param(1, routing_controllers_1.QueryParam("offset")), __param(2, routing_controllers_1.QueryParam("limit")), __param(3, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Object]),
    __metadata("design:returntype", void 0)
], ModelController.prototype, "getModelList", null);
__decorate([
    routing_controllers_1.Post("/:model/:id"),
    __param(0, routing_controllers_1.Param("model")), __param(1, routing_controllers_1.Param("id")), __param(2, routing_controllers_1.Body({ required: true })), __param(3, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object, Object]),
    __metadata("design:returntype", void 0)
], ModelController.prototype, "postModel", null);
__decorate([
    routing_controllers_1.Put("/:model/:id"),
    __param(0, routing_controllers_1.Param("model")), __param(1, routing_controllers_1.Param("id")), __param(2, routing_controllers_1.Body({ required: true })), __param(3, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object, Object]),
    __metadata("design:returntype", void 0)
], ModelController.prototype, "putModel", null);
ModelController = __decorate([
    routing_controllers_1.JsonController()
], ModelController);
exports.default = ModelController;
//# sourceMappingURL=ModelController.js.map