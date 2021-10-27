import express from "express";
import morgan from "morgan";
import api from "./routes/api.router";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(morgan("tiny"));

app.use("/", api);

app.use(errorHandler);

export default app;
