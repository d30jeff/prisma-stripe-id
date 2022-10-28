require('source-map-support').install();
import { Prisma } from '@prisma/client';
import { db } from '@providers/db.provider';
import { repositories } from '@repositories/index.repository';

async function main() {
  await db.write.cat.deleteMany({})

  await repositories.cat.create({
    data: {
      name: 'George The Cat'
    } as Prisma.CatCreateInput
  })


  const array = new Array(3).fill(0)
  await repositories.cat.createMany({
    data: array.map((element, index) => {
      return {
        name: `Random Cat ${index}`
      } as Prisma.CatCreateInput
    })
  })

  const cats = await repositories.cat.findMany({});

  console.log({
    cats
  })
}

main();
