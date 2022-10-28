require('source-map-support').install();
import { Prisma } from '@prisma/client';
import { db } from '@providers/db.provider';
import { repositories } from '@repositories/index.repository';

async function main() {
  await db.write.owner.deleteMany({});
  await db.write.cat.deleteMany({});

  const owner = await repositories.owner.create({
    data: {
      fullName: 'Chuck Norris',
    } as Prisma.OwnerCreateInput,
  });

  await repositories.cat.create({
    data: {
      name: 'George The Cat',
      Owner: {
        connect: {
          ID: owner.ID,
        },
      },
    } as Prisma.CatCreateInput,
  });

  const array = new Array(3).fill(0);
  await repositories.cat.createMany({
    data: array.map((element, index) => {
      return {
        name: `Random Cat ${index + 1}`,
        ownerID: owner.ID,
      } as Prisma.CatCreateManyInput;
    }),
  });

  const owners = await repositories.owner.findMany({
    select: {
      ID: true,
      fullName: true,
      Cats: {
        select: {
          ID: true,
          name: true,
          createdAt: true,
        },
      },
    },
  });

  console.log(JSON.stringify(owners, null, 2));
}

main();
