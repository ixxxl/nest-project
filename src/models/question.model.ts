import { IntegerDataType } from 'sequelize';
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';


@Table
export class QuestionModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column({ type: DataType.STRING, allowNull: false }) question: string;
  @Column({ type: DataType.STRING, allowNull: false }) answer: string;
  @Column({ type: DataType.STRING, allowNull: false }) userid: IntegerDataType;
}
