"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserService = void 0;
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const getUserService = {
    getUsers: async (body) => {
        const users = JSON.parse(await (0, promises_1.readFile)(path_1.default.resolve(__dirname, '../../src/db/data.json'), 'utf-8'));
        return users.users;
    }
};
exports.getUserService = getUserService;
//# sourceMappingURL=getUserService.js.map