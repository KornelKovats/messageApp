"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const logger_1 = require("../logger");
const http_status_codes_1 = require("http-status-codes");
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    logger_1.logger.error(`${err.status || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(err.status || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    res.json({
        message: req.app.get('env') === 'development'
            ? err.message
            : 'Unknown error happened',
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.js.map