import { Module } from '@nestjs/common';
import { CoffeeController } from './coffees.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CoffeeService } from './coffees.service';

@Module({
  controllers: [CoffeeController],
  providers: [CoffeeService],
  imports: [PrismaModule],
})
export class CoffeeModule { }
