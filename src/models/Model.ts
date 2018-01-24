
import { Table, Model, PrimaryKey, Column, AutoIncrement, BelongsToMany, DefaultScope, Scopes } from "sequelize-typescript";

@Table
export default class BaseModel<T> extends Model<T> {
    @PrimaryKey
    @Column
    id: number;

    @Column
    createdOn: number;

    @Column
    modifiedOn: number;
}