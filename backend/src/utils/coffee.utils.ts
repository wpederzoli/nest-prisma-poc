import { BadRequestException } from '@nestjs/common';
import { CoffeeType } from '@prisma/client';

export function validateCoffeeType(type: string): CoffeeType {
  const coffeTypes = Object.values(CoffeeType);
  const upperCaseType = type.toUpperCase() as CoffeeType;
  if (coffeTypes.includes(upperCaseType)) {
    return upperCaseType;
  } else {
    throw new BadRequestException('Invalid coffee type');
  }
}
