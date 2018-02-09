import "mocha";
import { expect, assert } from "chai";
import odata from "../oData/ODataBuilder";
import sequelize from "../Sequelize";
import Book from "../models/Book";




describe("Odata Builder Test Cases", () => {


  it("Should Return Book Obj", () => {

    const expand = odata.expand("Book");
  
    // TODO: Try and Test for the type not the String. instanceof failed
    expect(expand.model.name).to.equal("Book");

  });

});