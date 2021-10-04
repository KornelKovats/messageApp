import express from 'express';
import cors from 'cors';
import {helloController} from '../controllers';
const router = express.Router();

router.use(cors());
router.use(express.json());

router.use(helloController)

export default router;