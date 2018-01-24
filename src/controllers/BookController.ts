import { Controller, JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

import Book from "../models/Book";
import ModelRepository from "../repositories/ModelRepository";

import * as Logger from "bunyan";



@JsonController("/Book")
export default class BookController {

  private static logger = Logger.createLogger({name: "BookController"});

  @Get("/:id")
  getOneModel(@Param("id") id: number) {
      BookController.logger.debug("getOneModel (" + id + ")");
      return ModelRepository.getModelById("Book", id);
  }
}


