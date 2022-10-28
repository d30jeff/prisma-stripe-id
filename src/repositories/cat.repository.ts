import { Prisma } from '@prisma/client';
import { db } from '@providers/db.provider';

const fields = {
  ID: true,
  name: true,
  createdAt: true,
  updatedAt: true,
};

export const CatPublicSelect = Prisma.validator<Prisma.CatSelect>()(fields);

export type CatWithPublicFields = Prisma.CatGetPayload<{
  select: typeof CatPublicSelect;
}>;

export const CatPrivateSelect = Prisma.validator<Prisma.CatSelect>()({
  ...fields,
});

export type CatWithPrivateFields = Prisma.CatGetPayload<{
  select: typeof CatPrivateSelect;
}>;

export class CatRepository {
  upsert(params: Prisma.CatUpsertArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.cat.upsert(params);
  }

  create(params: Prisma.CatCreateArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.cat.create(params);
  }

  createMany(params: Prisma.CatCreateManyArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.cat.createMany(params);
  }

  findFirst(params: Prisma.CatFindFirstArgs, connection: Prisma.TransactionClient = db.read) {
    return connection.cat.findFirst(params);
  }

  findMany(params: Prisma.CatFindManyArgs, connection: Prisma.TransactionClient = db.read) {
    return connection.cat.findMany(params);
  }

  count(params: Prisma.CatCountArgs, connection: Prisma.TransactionClient = db.read) {
    return connection.cat.count(params);
  }

  update(params: Prisma.CatUpdateArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.cat.update(params);
  }

  delete(params: Prisma.CatDeleteArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.cat.delete(params);
  }
}
