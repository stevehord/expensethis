import "mocha";
import { expect, assert } from "chai";
import ModelController from "../controllers/ModelController";
import { mock, instance, when, verify } from "ts-mockito";
import { Request, Response } from "express";
import Bluebird = require("bluebird");
import User from "../models/User";
import Book from "../models/Book";
import { Promise } from "bluebird";
import sequelize from "../Sequelize";
import Logger from "../utils/Logger";


class Result {
  count: number;
  rows: Object[];
}

const modelController = new ModelController();
const logger = new Logger("odataQueryTests");

// Mock the Express Response Obj
const res = {} as Response;
res.headersSent = false;

describe("Odata Query Test Cases", () => {


  it("Should Return 1 Users from Odata Query", () => {
    return modelController.getModeOdatalList("User", undefined, undefined, "id $eq 1", undefined, undefined, res).then(result => {
      const user: User[] = (<Result>result).rows as User[];
      expect(user.length).to.equal(1);
      expect(user[0].id).to.equal(1);
    });
  });


  it("Should Return 4 Users from Odata Query", () => {
    return modelController.getModeOdatalList("User", undefined, undefined, "id $gt 1", undefined, undefined, res).then(result => {
      const userList: User[] = (<Result>result).rows as User[];
      expect(userList.length).to.equal(4);
      expect(userList[0].id).to.equal(2);
    });
  });

  it("Should Return 1 Users with a Book from Odata Query ", () => {
    return modelController.getModeOdatalList("User", undefined, undefined, "id $eq 1", "Book", undefined, res).then(result => {
      const userList: User[] = (<Result>result).rows as User[];
      expect(userList.length).to.equal(1);
      expect(userList[0].id).to.equal(1);
      expect(userList[0].books[0].id).to.equal(1);
    });
  });
});