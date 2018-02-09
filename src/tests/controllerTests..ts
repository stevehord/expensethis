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


class Result {
  count: number;
  rows: Object[];
}

const modelController = new ModelController();

// Mock the Express Response Obj
const res = {} as Response;
res.headersSent = false;

describe("Controller Test Cases", () => {

  it("Should Return An Empty Promise", () => {
    const httpResponseMock = {} as Response;
    httpResponseMock.headersSent = true;

    const p = modelController.getOneModel("User", 1, httpResponseMock);
    assert.instanceOf(p, Promise, "The Result is not a Promise");
    return p.done();
});

  it("Should Return A User With Id 1", () => {
    return modelController.getOneModel("User", 1, res).then(result => {
      const user: User = result as User;
      expect(user.id).to.equal(1);
    });
  });

  it("Should Return Result Obj with One User Id 1", () => {
    return modelController.getModelList("User", 0 , 1, "", res).then(function(result: Result) {
      const user: User[] = result.rows as User[];
      expect(user.length).to.equal(1);
      expect(user[0].id).to.equal(1);
    });
  });

  it("Should Return Result Obj with Two Users Starting with User 1", () => {
    return modelController.getModelList("User", 0 , 2, "", res).then(function(result: Result) {
      const user: User[] = result.rows as User[];
      expect(user.length).to.equal(2);
      expect(user[0].id).to.equal(1);
      expect(user[1].id).to.equal(2);
    });
  });

  it("Should Return Result Obj with Two Users Starting with User 2", () => {
    return modelController.getModelList("User", 1 , 3, "", res).then(function(result: Result) {
      const user: User[] = result.rows as User[];
      expect(user.length).to.equal(3);
      expect(user[0].id).to.equal(2);
    });
  });

  it("Should Return Result Obj with One Book Starting with Book 1", () => {
    return modelController.getModelList("Book", 0 , 1, "", res).then(function(result: Result) {
      const book: Book[] = result.rows as Book[];
      expect(book.length).to.equal(1);
      expect(book[0].id).to.equal(1);
    });
  });

  it("Should Return 3 Users with no Count - View = Raw", () => {
    return modelController.getModelList("User", 0, 3, "raw", res).then(result => {
      const user: User[] = result as User[];
      expect(user.length).to.equal(3);
      expect(user[0].id).to.equal(1);
    });
  });

  it("Should Return 3 Users from Odata Query", () => {
    return modelController.getModeOdatalList("User", 0, 3, undefined, undefined, undefined, res).then(result => {
      const user: User[] = (<Result>result).rows as User[];
      expect(user.length).to.equal(3);
      expect(user[0].id).to.equal(1);
    });
  });
});