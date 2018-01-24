import { Table, Model, PrimaryKey, ForeignKey, BelongsTo, Column, AutoIncrement, BelongsToMany, DefaultScope, Scopes } from "sequelize-typescript";
import BaseModel from "./Model";
import User from "./User";

 @Table
 export default class Book extends Model<Book> {

  @Column
  name: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
 }