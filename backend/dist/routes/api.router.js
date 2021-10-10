"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const controllers_1 = require("../controllers");
const controllers_2 = require("../controllers");
const router = express_1.default.Router();
router.use((0, cors_1.default)());
router.use(express_1.default.json());
router.get('/hello', controllers_1.helloController);
router.get('/users', controllers_2.getUsersController);
exports.default = router;
//# sourceMappingURL=api.router.js.map