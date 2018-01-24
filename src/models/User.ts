import { Table, Model, PrimaryKey, HasMany, Column, AutoIncrement, BelongsToMany, DefaultScope, Scopes } from "sequelize-typescript";
import BaseModel from "./Model";
import Book from "./Book";

 @Table
 export default class User extends Model<User> {

  @Column
  firstName: string;

  @Column
  lastName: string;

  @HasMany(() => Book)
  books: Book[];
 }