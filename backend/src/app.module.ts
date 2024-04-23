import { Module } from '@nestjs/common';
import { CoffeeModule } from './coffees/coffees.module';

@Module({
  imports: [CoffeeModule],
})
export class AppModule { }
