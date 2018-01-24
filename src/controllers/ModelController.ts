import { Request, Response } from "express";
import { Controller, JsonController, Param, QueryParam, Body, Get, Post, Put, Delete, Req, Res } from "routing-controllers";


import ModelRepository from "../repositories/ModelRepository";
import Bluebird = require("bluebird");

@JsonController()
class ModelController {


  @Get("/:model/:id")
  getOneModel(@Param("model") modelName: string, @Param("id") id: number, @Res() res: Response) {
      if (res.headersSent) {
        return new Bluebird<void>((resolve, reject, onCancel) => {});
      }
      return ModelRepository.getModelById(modelName, id);
  }

  @Get("/:model")
  getModelList(@Param("model") modelName: string, @QueryParam("offset") offset: number, @QueryParam("limit") limit: number, @Res() res: Response) {

    if (res.headersSent) {
      return new Bluebird<void>((resolve, reject, onCancel) => {});
    }
    return ModelRepository.getModelList(modelName, offset, limit);
  }

  @Post("/:model/:id")
  postModel(@Param("model") modelName: string, @Param("id") id: number, @Body({ required: true }) model: any, @Res() res: Response) {

    if (res.headersSent) {
      return new Bluebird<void>((resolve, reject, onCancel) => {});
    }
    // TODO: SNH - make sure the id and the Model.id match
    return ModelRepository.postModel(modelName, model);
  }

  @Put("/:model/:id")
  putModel(@Param("model") modelName: string, @Param("id") id: number, @Body({ required: true }) model: any, @Res() res: Response) {

    if (res.headersSent) {
      return new Bluebird<void>((resolve, reject, onCancel) => {});
    }
    // TODO: SNH - make sure the id and the Model.id match
    return ModelRepository.postModel(modelName, model);
  }
}

export default ModelController;