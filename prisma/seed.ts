import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.product.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Razer Basilisk Ultimate',
      category: {
        create: {
          name: 'Gaming Mice',
        },
      },
    }
  });

  await prisma.product.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Razer Huntsman mini',
      category: {
        create: {
          name: 'Gaming Keyboard',
        },
      },
    }
  });

  await prisma.product.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Razer Tartarus',
      categoryId: 2
    },
  });
}

seed();
