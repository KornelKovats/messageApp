"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserController = void 0;
const getUserService_1 = require("../services/getUserService");
async function getUserController(req, res, next) {
    try {
        res.send(await getUserService_1.getUserService.newUser(req.body));
    }
    catch (error) {
        next(error);
    }
}
exports.getUserController = getUserController;
//# sourceMappingURL=getUserController.js.map