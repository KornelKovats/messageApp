"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const api_router_1 = __importDefault(require("./routes/api.router"));
const error_handler_1 = require("./middlewares/error-handler");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('tiny'));
app.use('/', api_router_1.default);
app.use(error_handler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map