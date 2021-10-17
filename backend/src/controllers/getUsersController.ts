import { Request, Response, NextFunction } from "express";
import { getUserService } from "../services/getUserService";

async function getUsersController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.send(await getUserService.getUsers(req.body));
  } catch (error) {
    next(error);
  }
}

export { getUsersController };
