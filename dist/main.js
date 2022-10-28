"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
const db_provider_1 = require("@providers/db.provider");
const index_repository_1 = require("@repositories/index.repository");
async function main() {
    await db_provider_1.db.write.cat.deleteMany({});
    await index_repository_1.repositories.cat.create({
        data: {
            name: 'George The Cat'
        }
    });
    const array = new Array(3).fill(0);
    await index_repository_1.repositories.cat.createMany({
        data: array.map((element, index) => {
            return {
                name: `Random Cat ${index}`
            };
        })
    });
    const cats = await index_repository_1.repositories.cat.findMany({});
    console.log({
        cats
    });
}
main();
//# sourceMappingURL=main.js.map