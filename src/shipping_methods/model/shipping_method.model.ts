import {
  Column,
  DataType,
  Model,
  Table,
  AutoIncrement,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { UsersAddress } from 'src/users_address/model/users_address.model';
import { Order } from 'src/order/model/order.model';

interface ShippingMethodAttributes {
  id: number;
  name: string;
  cost: number;
  estimated_delivery_time: string;
  user_address_id: number;
}

@Table({
  tableName: 'shipping_methods',
})
export class ShippingMethod extends Model<ShippingMethodAttributes> {
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  cost: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  estimated_delivery_time: string;

  @ForeignKey(() => UsersAddress)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  user_address_id: number;

  @BelongsTo(() => UsersAddress)
  userAddress: UsersAddress;

  @HasMany(() => Order, {
    onDelete: 'CASCADE',
  })
  orders: Order[];
}
