import { PrismaClient, CoffeeType } from '@prisma/client';

const prisma = new PrismaClient();

async function insertCoffee(name: string, type: CoffeeType) {
  await prisma.coffee.upsert({
    where: { name },
    update: {},
    create: {
      name,
      description: 'Free in the MVST office',
      price: 19.0,
      type,
      imageUrl: type == CoffeeType.ARABIC ? '/arabic.png' : '/robusta.png',
    },
  });
}

async function main() {
  const coffees = [
    { name: 'Dark Roast', type: CoffeeType.ARABIC },
    { name: 'Americano', type: CoffeeType.ROBUSTA },
    { name: 'Cappucino', type: CoffeeType.ARABIC },
    { name: 'Decaf Americano', type: CoffeeType.ROBUSTA },
    { name: 'Pine Roast', type: CoffeeType.ARABIC },
    { name: 'Raphael Original', type: CoffeeType.ARABIC },
  ];

  for (let coffee of coffees) {
    await insertCoffee(coffee.name, coffee.type);
  }

  console.log('DB seeded');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
