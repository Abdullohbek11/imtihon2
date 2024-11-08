import {
  Column,
  DataType,
  Model,
  Table,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { User } from 'src/users/model/user.model';
import { ShippingMethod } from 'src/shipping_methods/model/shipping_method.model';
import { OrderItem } from 'src/order_items/model/order_item.model';
import { Payment } from 'src/payments/model/payment.model';

interface OrderCreationAttrs {
  user_id: number;
  order_date: Date;
  total_amount: number;
  status: string;
  shipping_method_id: number;
}

@Table({ tableName: 'orders' })
export class Order extends Model<Order, OrderCreationAttrs> {
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  order_date: Date;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  total_amount: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @ForeignKey(() => ShippingMethod)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
  })
  shipping_method_id: number;

  @BelongsTo(() => ShippingMethod)
  shippingMethod: ShippingMethod;

  @HasMany(() => OrderItem, {
    onDelete: 'CASCADE',
  })
  orderItems: OrderItem[];

  @HasMany(() => Payment, {
    onDelete: 'CASCADE',
  })
  payments: Payment[];
}
