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
const Logger = require("bunyan");
let BookController = BookController_1 = class BookController {
    getOneModel(id) {
        BookController_1.logger.debug("getOneModel (" + id + ")");
        return ModelRepository_1.default.getModelById("Book", id);
    }
};
BookController.logger = Logger.createLogger({ name: "BookController" });
__decorate([
    routing_controllers_1.Get("/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "getOneModel", null);
BookController = BookController_1 = __decorate([
    routing_controllers_1.JsonController("/Book")
], BookController);
exports.default = BookController;
var BookController_1;
//# sourceMappingURL=BookController.js.map