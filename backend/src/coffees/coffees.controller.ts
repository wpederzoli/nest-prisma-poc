import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CoffeeService } from './coffees.service';
import { validateCoffeeType } from 'src/utils/coffee.utils';
import { ApiBody, ApiQuery } from '@nestjs/swagger';
import { CreateCoffeeDto } from './create-coffee.dto';
import { Response } from 'express';

@Controller()
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) { }

  @Get('coffee')
  @ApiQuery({ name: 'type', required: false })
  async getCoffees(@Query('type') _type?: string) {
    if (_type) {
      const validType = validateCoffeeType(_type);
      return this.coffeeService.getCoffeesByType(validType);
    } else {
      return this.coffeeService.getAllCoffees();
    }
  }

  @Post('create')
  @ApiBody({ type: CreateCoffeeDto })
  async createCoffee(
    @Res() response: Response,
    @Body() createCoffeeDto: CreateCoffeeDto,
  ) {
    try {
      await this.coffeeService.createCoffee(createCoffeeDto);
    } catch (e) {
      return response.status(HttpStatus.NOT_ACCEPTABLE).send(e);
    }

    return response
      .status(HttpStatus.OK)
      .send('New coffee created successfully');
  }
}
