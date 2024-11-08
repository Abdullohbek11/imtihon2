import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsDate, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    example: 1,
    description: 'User ID who created the order',
  })
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @ApiProperty({
    example: new Date(),
    description: 'Date when order was placed',
  })
  @IsNotEmpty()
  @IsDate()
  order_date: Date;

  @ApiProperty({
    example: 299.99,
    description: 'Total amount of the order',
  })
  @IsNotEmpty()
  @IsNumber()
  total_amount: number;

  @ApiProperty({
    example: 'pending',
    description: 'Current status of the order',
  })
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({
    example: 1,
    description: 'ID of the shipping method selected',
  })
  @IsNotEmpty()
  @IsNumber()
  shipping_method_id: number;
}
