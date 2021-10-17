import { Request, Response, NextFunction } from "express";
import { postUserService } from "../services/postUserService";

async function postUserConstroller(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log(req.body.name);
    res.send(await postUserService.addUser(req.body.name));
  } catch (error) {
    next(error);
  }
}

export { postUserConstroller };
