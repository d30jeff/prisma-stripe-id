"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatRepository = exports.CatPrivateSelect = exports.CatPublicSelect = void 0;
const client_1 = require("@prisma/client");
const db_provider_1 = require("@providers/db.provider");
const fields = {
    ID: true,
    name: true,
    createdAt: true,
    updatedAt: true,
};
exports.CatPublicSelect = client_1.Prisma.validator()(fields);
exports.CatPrivateSelect = client_1.Prisma.validator()(Object.assign({}, fields));
class CatRepository {
    upsert(params, connection = db_provider_1.db.write) {
        return connection.cat.upsert(params);
    }
    create(params, connection = db_provider_1.db.write) {
        return connection.cat.create(params);
    }
    createMany(params, connection = db_provider_1.db.write) {
        return connection.cat.createMany(params);
    }
    findFirst(params, connection = db_provider_1.db.read) {
        return connection.cat.findFirst(params);
    }
    findMany(params, connection = db_provider_1.db.read) {
        return connection.cat.findMany(params);
    }
    count(params, connection = db_provider_1.db.read) {
        return connection.cat.count(params);
    }
    update(params, connection = db_provider_1.db.write) {
        return connection.cat.update(params);
    }
    delete(params, connection = db_provider_1.db.write) {
        return connection.cat.delete(params);
    }
}
exports.CatRepository = CatRepository;
//# sourceMappingURL=cat.repository.js.map