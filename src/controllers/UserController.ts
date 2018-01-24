import { Request, Response } from "express";
// import ModelController from "./ModelController";
// import { User } from "../models/User";
import User from "../models/User";
import Book from "../models/Book";
import BaseModel from "../models/Model";
import ModelRepository from "../repositories/ModelRepository";


export default class UserController {

  constructor() {
    console.log("UserController constructor");
    }

  getUserModel(req: Request, res: Response) {
    console.log("UserController GET");

    // seq.addModels([Person]);
  User.findById(1, { include : [ Book ] }).then(user => {
    console.log(user.firstName + " has " + user.books.length);
    });

  User.findById(1).then(user => {
    console.log(user.firstName + " has " + user.$get("books").then(books => {
      console.log(books);
    }));
  });


  }

  putModel() {
    console.log("UserController PUT");
  }
}

// export {UserController};


export let getContact = (req: Request, res: Response) => {
  res.render("contact", {
    title: "Contact"
  });
};