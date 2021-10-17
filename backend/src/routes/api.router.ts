import express from "express";
import cors from "cors";
import { helloController } from "../controllers";
import { getUsersController } from "../controllers";
import { postUserConstroller } from "../controllers";
const router = express.Router();

router.use(cors());
router.use(express.json());

router.get("/hello", helloController);
router.post("/user", postUserConstroller);
router.get("/users", getUsersController);

export default router;
