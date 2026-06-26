import type { Request, Response } from "express";
import express from "express";
import movieRouter from "./src/routes/movieRoute.ts";
import authRoutes from "./src/routes/authRoutes.ts";

const app = express();
const PORT = 8000;

//  Body Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/movies", movieRouter);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port :${PORT}`);
});
