import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

import User from "../models/User";
import Book from "../models/Book";
import BaseModel from "../models/Model";
import Logger from "../utils/Logger";
import ModelRepository from "../repositories/ModelRepository";


@JsonController("/User")
export default class UserController {

  private static logger = new Logger("UserController");

  @Get("/:id")
  getOneModel(@Param("id") id: number) {
      UserController.logger.debug("getOneModel (" + id + ")");
      return ModelRepository.getModelById("Book", id);
  }
}