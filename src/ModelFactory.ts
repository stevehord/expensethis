import Book from "./models/Book";
import User from "./models/User";
import sequelize from "./Sequelize";

export default class ModelFactory {

    public static getClass(name: string): any {

        const nameMap: { [key: string]: any} = {
            "Book": sequelize.model("Book"),
            "User": sequelize.model("User")
        };
        return nameMap[name];
    }
}