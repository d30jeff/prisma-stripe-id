import { Prisma } from '@prisma/client';
import { db } from '@providers/db.provider';

const fields = {
  ID: true,
  fullName: true,
  Cats: true,
  createdAt: true,
  updatedAt: true,
};

export const OwnerPublicSelect = Prisma.validator<Prisma.OwnerSelect>()(fields);

export type OwnerWithPublicFields = Prisma.OwnerGetPayload<{
  select: typeof OwnerPublicSelect;
}>;

export const OwnerPrivateSelect = Prisma.validator<Prisma.OwnerSelect>()({
  ...fields,
});

export type OwnerWithPrivateFields = Prisma.OwnerGetPayload<{
  select: typeof OwnerPrivateSelect;
}>;

export class OwnerRepository {
  upsert(params: Prisma.OwnerUpsertArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.owner.upsert(params);
  }

  create(params: Prisma.OwnerCreateArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.owner.create(params);
  }

  createMany(params: Prisma.OwnerCreateManyArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.owner.createMany(params);
  }

  findFirst(params: Prisma.OwnerFindFirstArgs, connection: Prisma.TransactionClient = db.read) {
    return connection.owner.findFirst(params);
  }

  findMany(params: Prisma.OwnerFindManyArgs, connection: Prisma.TransactionClient = db.read) {
    return connection.owner.findMany(params);
  }

  count(params: Prisma.OwnerCountArgs, connection: Prisma.TransactionClient = db.read) {
    return connection.owner.count(params);
  }

  update(params: Prisma.OwnerUpdateArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.owner.update(params);
  }

  delete(params: Prisma.OwnerDeleteArgs, connection: Prisma.TransactionClient = db.write) {
    return connection.owner.delete(params);
  }
}
