"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const { format, createLogger, transports } = winston_1.default;
const options = {
    file: {
        level: 'info',
        handleExceptions: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
        json: true,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        format: format.combine(format.colorize(), format.simple()),
    },
};
exports.logger = createLogger({
    exitOnError: false,
    handleExceptions: true,
    transports: [
        Object.assign(new transports.File({
            ...options.file,
            filename: 'logs/error.log',
            level: 'error',
        }), { handleRejections: true }),
        new transports.File({
            ...options.file,
            filename: 'logs/app.log',
        }),
    ],
});
/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
    exports.logger.add(Object.assign(new transports.Console(options.console), {
        handleRejections: true,
    }));
}
//# sourceMappingURL=logger.js.map