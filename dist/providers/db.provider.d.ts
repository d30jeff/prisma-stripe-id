import { PrismaClient } from '@prisma/client';
export declare const db: {
    write: PrismaClient<{
        log: ({
            emit: "event";
            level: "query";
        } | {
            emit: "stdout";
            level: "error";
        } | {
            emit: "stdout";
            level: "info";
        } | {
            emit: "stdout";
            level: "warn";
        })[];
        datasources: {
            db: {
                url: string;
            };
        };
    }, "query", false>;
    read: PrismaClient<{
        log: ({
            emit: "event";
            level: "query";
        } | {
            emit: "stdout";
            level: "error";
        } | {
            emit: "stdout";
            level: "info";
        } | {
            emit: "stdout";
            level: "warn";
        })[];
        datasources: {
            db: {
                url: string;
            };
        };
    }, "query", false>;
};
