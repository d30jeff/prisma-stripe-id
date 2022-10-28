"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateID = void 0;
const nanoid_1 = require("nanoid");
const AVAILABLE = '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const generateID = (prefix, length = 21) => {
    const ID = (0, nanoid_1.nanoid)();
    return `${prefix}_${ID}`;
};
exports.generateID = generateID;
//# sourceMappingURL=nanoid.provider.js.map