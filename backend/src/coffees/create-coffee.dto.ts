import { ApiProperty } from '@nestjs/swagger';
import { CoffeeType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateCoffeeDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @ApiProperty({ example: 19.5 })
  price: number;

  @IsNotEmpty()
  @IsEnum(CoffeeType)
  @ApiProperty({
    example: 'ROBUSTA',
    enum: [CoffeeType.ROBUSTA, CoffeeType.ARABIC],
    description: 'Type of coffee',
  })
  type: CoffeeType;

  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;
}
