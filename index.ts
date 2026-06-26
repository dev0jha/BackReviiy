import type { Request, Response } from "express";
import express from "express";
import movieRouter from "./src/routes/movieRoute.ts";

const app = express();
const PORT = 8000;

app.use("/movies", movieRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Namskar Dev");
});

app.listen(PORT, () => {
  console.log(`Server running on port :${PORT}`);
});
