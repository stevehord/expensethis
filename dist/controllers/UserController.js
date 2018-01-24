"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import ModelController from "./ModelController";
// import { User } from "../models/User";
const User_1 = require("../models/User");
const Book_1 = require("../models/Book");
class UserController {
    constructor() {
        console.log("UserController constructor");
    }
    getUserModel(req, res) {
        console.log("UserController GET");
        // seq.addModels([Person]);
        User_1.default.findById(1, { include: [Book_1.default] }).then(user => {
            console.log(user.firstName + " has " + user.books.length);
        });
        User_1.default.findById(1).then(user => {
            console.log(user.firstName + " has " + user.$get("books").then(books => {
                console.log(books);
            }));
        });
    }
    putModel() {
        console.log("UserController PUT");
    }
}
exports.default = UserController;
// export {UserController};
exports.getContact = (req, res) => {
    res.render("contact", {
        title: "Contact"
    });
};
//# sourceMappingURL=UserController.js.map