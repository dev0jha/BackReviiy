import express from "express";
import type { Request, Response } from "express";

const router = express.Router();

router.get("/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello MovieRouter" });
});

export default router;
