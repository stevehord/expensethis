import { Type } from "class-transformer";
import BaseModel from "../models/Model";
import User from "../models/User";
import sequelize from "../sequelize";
import * as Bluebird from "bluebird";
declare global { export interface Promise<T> extends Bluebird<T> {} }


import { Table, Model, PrimaryKey, ForeignKey, BelongsTo, Column, AutoIncrement, BelongsToMany, DefaultScope, Scopes, Sequelize } from "sequelize-typescript";

export default class ModelRepository<T> {

    // private className: string;

    // constructor(cls: { new(): T }) {
    //     this.className = cls.name;
    // }

    static getModelById(modelName: string, id: number): Bluebird<{}> {
        return sequelize.model(modelName).findById(id);
    }

    static getModelList(modelName: string, offset: number, limit: number = 200): Bluebird<{}> {
        return sequelize.model(modelName).findAll({offset: offset, limit: limit});
    }

    static getModelListByQuery(modelName: string, query: string): Bluebird<{}> {
        return sequelize.model(modelName).findAll({});
    }

    static postModel(modelName: string, model: any): Bluebird<{}> {
        return sequelize.model(modelName).insertOrUpdate(model, {});
    }

    static deleteModel(modelName: string, model: any): Bluebird<{}> {
        return sequelize.model(modelName).destroy(model);
    }
}