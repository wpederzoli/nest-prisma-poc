import { Injectable } from '@nestjs/common';
import { Coffee, CoffeeType } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCoffeeDto } from './create-coffee.dto';

@Injectable()
export class CoffeeService {
  constructor(private prisma: PrismaService) { }

  async getAllCoffees(): Promise<Coffee[]> {
    return this.prisma.coffee.findMany();
  }

  async getCoffeesByType(type: CoffeeType): Promise<Coffee[]> {
    return this.prisma.coffee.findMany({ where: { type } });
  }

  async createCoffee(createCoffeeDto: CreateCoffeeDto) {
    const { name } = createCoffeeDto;
    const existingCoffee = await this.prisma.coffee.findUnique({
      where: { name },
    });

    if (existingCoffee) {
      throw new Error(`Coffee with name ${name} already exists.`);
    }

    return this.prisma.coffee.create({
      data: {
        ...createCoffeeDto,
        price: Number(parseFloat(createCoffeeDto.price.toString()).toFixed(2)),
      } as CreateCoffeeDto,
    });
  }
}
