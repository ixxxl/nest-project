import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';

@Table
export class UserModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column({ type: DataType.STRING, allowNull: false }) name: string;
  @Column({ type: DataType.STRING, allowNull: false }) lastname: string;
  @Column({ type: DataType.STRING, allowNull: false }) password: string;
}
