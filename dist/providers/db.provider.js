"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const client_1 = require("@prisma/client");
const config_provider_1 = require("@providers/config.provider");
const nanoid_provider_1 = require("@providers/nanoid.provider");
const snake_case_1 = require("snake-case");
const prismaWriteConnection = new client_1.PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
        {
            emit: 'stdout',
            level: 'error',
        },
        {
            emit: 'stdout',
            level: 'info',
        },
        {
            emit: 'stdout',
            level: 'warn',
        },
    ],
    datasources: {
        db: {
            url: config_provider_1.config.DATABASE_URL,
        },
    },
});
const prismaReadConnection = new client_1.PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
        {
            emit: 'stdout',
            level: 'error',
        },
        {
            emit: 'stdout',
            level: 'info',
        },
        {
            emit: 'stdout',
            level: 'warn',
        },
    ],
    datasources: {
        db: {
            url: config_provider_1.config.DATABASE_READ_REPLICA_URL,
        },
    },
});
prismaWriteConnection.$use(async (params, next) => {
    if (params.args.data) {
        let data = [];
        if (params.args.data.constructor === Array) {
            data = params.args.data;
        }
        else {
            data = [params.args.data];
        }
        for (const d of data) {
            d.ID = (0, nanoid_provider_1.generateID)((0, snake_case_1.snakeCase)(params.model));
        }
    }
    const result = await next(params);
    return result;
});
exports.db = {
    write: prismaWriteConnection,
    read: prismaReadConnection,
};
//# sourceMappingURL=db.provider.js.map