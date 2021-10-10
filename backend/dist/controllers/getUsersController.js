"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersController = void 0;
const getUserService_1 = require("../services/getUserService");
async function getUsersController(req, res, next) {
    try {
        res.send(await getUserService_1.getUserService.getUsers(req.body));
    }
    catch (error) {
        next(error);
    }
}
exports.getUsersController = getUsersController;
//# sourceMappingURL=getUsersController.js.map