import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

import Book from "../models/Book";
import Logger from "../utils/Logger";
import ModelRepository from "../repositories/ModelRepository";

@JsonController("/Book")
export default class BookController {

  private logger = new Logger("BookController");

  @Get("/:id")
  getOneModel(@Param("id") id: number) {
      this.logger.debug("getOneModel (" + id + ")");
      return ModelRepository.getModelById("Book", id);
  }
}


