import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeService } from './coffees.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCoffeeDto } from './create-coffee.dto';
import { Coffee, CoffeeType } from '@prisma/client';

const dummy_coffees: Coffee[] = [
  {
    id: 1,
    name: 'Coffee 1',
    description: 'dummy description',
    imageUrl: 'dummyUrl',
    type: CoffeeType.ROBUSTA,
    price: 2.5,
  },
];

describe('CoffeeService', () => {
  let coffeeService: CoffeeService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeeService, PrismaService],
    }).compile();

    coffeeService = module.get<CoffeeService>(CoffeeService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(coffeeService).toBeDefined();
  });

  describe('getAllCoffees', () => {
    it('should return an array of coffees', async () => {
      jest
        .spyOn(prismaService.coffee, 'findMany')
        .mockResolvedValue(dummy_coffees);

      const result = await coffeeService.getAllCoffees();

      expect(result).toEqual(dummy_coffees);
    });
  });

  describe('getCoffeesByType', () => {
    it('should return an array of coffees of the given type', async () => {
      const type: CoffeeType = CoffeeType.ROBUSTA;
      jest
        .spyOn(prismaService.coffee, 'findMany')
        .mockResolvedValue(dummy_coffees);

      const result = await coffeeService.getCoffeesByType(type);

      expect(result).toEqual(dummy_coffees);
    });
  });

  describe('createCoffee', () => {
    it('should create a new coffee', async () => {
      // Arrange
      const createCoffeeDto: CreateCoffeeDto = {
        name: 'New Coffee',
        description: 'new description',
        imageUrl: 'dummy url',
        type: CoffeeType.ARABIC,
        price: 3.0,
      };
      const createdCoffee: Coffee = { id: 2, ...createCoffeeDto };
      jest.spyOn(prismaService.coffee, 'findUnique').mockResolvedValue(null);
      jest
        .spyOn(prismaService.coffee, 'create')
        .mockResolvedValue(createdCoffee);

      const result = await coffeeService.createCoffee(createCoffeeDto);

      expect(result).toEqual(createdCoffee);
    });

    it('should throw an error if the coffee already exists', async () => {
      const createCoffeeDto: CreateCoffeeDto = dummy_coffees[0];

      const existingCoffee: Coffee = { id: 1, ...createCoffeeDto };
      jest
        .spyOn(prismaService.coffee, 'findUnique')
        .mockResolvedValue(existingCoffee);

      await expect(
        coffeeService.createCoffee(createCoffeeDto),
      ).rejects.toThrowError(/already exists/i);
    });
  });
});
