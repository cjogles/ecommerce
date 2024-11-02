// src/index.ts
import express, { Express, Request, Response } from "express";
import config from "@utils/config";

const app: Express = express();
const port = config.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
