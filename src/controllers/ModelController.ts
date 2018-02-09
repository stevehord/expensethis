import { Request, Response } from "express";
import { Controller, JsonController, Param, QueryParam, Body, Get, Post, Put, Delete, Req, Res } from "routing-controllers";

import Logger from "../utils/Logger";
import Bluebird = require("bluebird");
import ModelRepository from "../repositories/ModelRepository";
import ModelFactory from "../ModelFactory";
import oData from "../oData/oDataBuilder";


@JsonController()
class ModelController {

  private static logger = new Logger("ModelController");
  private static RAW: string = "raw";


  @Get("/api/:model/:id")
  getOneModel(@Param("model") modelName: string, @Param("id") id: number, @Res() res: Response): Bluebird<{}> {
      if (res.headersSent) {
        return new Bluebird<{}>((resolve, reject, onCancel) => {});
      }
      ModelController.logger.info("getOneModel (" + modelName + ": " + id + ")");
      return ModelRepository.getModelById(ModelFactory.getClass(modelName), id);
  }

  @Get("/api/:model")
  getModelList<User>(@Param("model") modelName: string,
                @QueryParam("offset") offset: number,
                @QueryParam("limit") limit: number,
                @QueryParam("view") view: string,
                @Res() res: Response): Bluebird<{}> {

    if (res.headersSent) {
      return new Bluebird<{}>((resolve, reject, onCancel) => {});
    }
    ModelController.logger.info("getModelList (" + modelName + ": " + offset + ": " + limit +  ": " + view + ")");

    if (view === ModelController.RAW) {
      return ModelRepository.getModelList(ModelFactory.getClass(modelName), offset, limit);
    } else {
      return ModelRepository.getModelListAndCount(ModelFactory.getClass(modelName), offset, limit);
    }
  }

  @Get("/query/:model")
  getModeOdatalList(@Param("model") modelName: string,
                @QueryParam("$skip") skip: number,
                @QueryParam("$top") top: number,
                @QueryParam("$filter") filter: string,
                @QueryParam("$expand") expand: string,
                @QueryParam("view") view: string,
                @Res() res: Response): Bluebird<{}> {


    if (res.headersSent) {
      return new Bluebird<{}>((resolve, reject, onCancel) => {});
    }
    ModelController.logger.info("getModeOdatalList (" + modelName + ": " + skip + ": " + top +  ": " + view + ")");


    if (view === ModelController.RAW) {
      return ModelRepository.getModelListByOdataQuery(ModelFactory.getClass(modelName), skip, top, oData.filter(filter), oData.expand(expand));
    } else {
      return ModelRepository.getModelListAndCountByOdataQuery(ModelFactory.getClass(modelName), skip, top, oData.filter(filter), oData.expand(expand));
    }
  }

  @Post("/:model/:id")
  postModel(@Param("model") modelName: string,
            @Param("id") id: number,
            @Body({ required: true }) model: any,
            @Res() res: Response): Bluebird<{}> {

    if (res.headersSent) {
      return new Bluebird<{}>((resolve, reject, onCancel) => {});
    }
    // TODO: SNH - make sure the id and the Model.id match
    ModelController.logger.info("postModel (" + modelName + ": " + id + ": " + model +  ")");
    return ModelRepository.updateOrInsertModel(ModelFactory.getClass(modelName), model);
  }

  @Put("/:model/:id")
  putModel(@Param("model") modelName: string,
          @Param("id") id: number,
          @Body({ required: true }) model: any,
          @Res() res: Response): Bluebird<{}> {

    if (res.headersSent) {
      return new Bluebird<{}>((resolve, reject, onCancel) => {});
    }
    // TODO: SNH - make sure the id and the Model.id match
    ModelController.logger.info("putModel (" + modelName + ": " + id + ": " + model +  ")");
    return ModelRepository.updateOrInsertModel(ModelFactory.getClass(modelName), model);
  }
}

export default ModelController;