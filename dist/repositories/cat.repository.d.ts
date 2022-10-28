import { Prisma } from '@prisma/client';
export declare const CatPublicSelect: {
    ID: boolean;
    name: boolean;
    createdAt: boolean;
    updatedAt: boolean;
};
export declare type CatWithPublicFields = Prisma.CatGetPayload<{
    select: typeof CatPublicSelect;
}>;
export declare const CatPrivateSelect: {
    ID: boolean;
    name: boolean;
    createdAt: boolean;
    updatedAt: boolean;
};
export declare type CatWithPrivateFields = Prisma.CatGetPayload<{
    select: typeof CatPrivateSelect;
}>;
export declare class CatRepository {
    upsert(params: Prisma.CatUpsertArgs, connection?: Prisma.TransactionClient): Prisma.Prisma__CatClient<import(".prisma/client").Cat, never>;
    create(params: Prisma.CatCreateArgs, connection?: Prisma.TransactionClient): Prisma.Prisma__CatClient<import(".prisma/client").Cat, never>;
    createMany(params: Prisma.CatCreateManyArgs, connection?: Prisma.TransactionClient): import(".prisma/client").PrismaPromise<Prisma.BatchPayload>;
    findFirst(params: Prisma.CatFindFirstArgs, connection?: Prisma.TransactionClient): Prisma.Prisma__CatClient<import(".prisma/client").Cat, null>;
    findMany(params: Prisma.CatFindManyArgs, connection?: Prisma.TransactionClient): import(".prisma/client").PrismaPromise<import(".prisma/client").Cat[]>;
    count(params: Prisma.CatCountArgs, connection?: Prisma.TransactionClient): import(".prisma/client").PrismaPromise<number>;
    update(params: Prisma.CatUpdateArgs, connection?: Prisma.TransactionClient): Prisma.Prisma__CatClient<import(".prisma/client").Cat, never>;
    delete(params: Prisma.CatDeleteArgs, connection?: Prisma.TransactionClient): Prisma.Prisma__CatClient<import(".prisma/client").Cat, never>;
}
