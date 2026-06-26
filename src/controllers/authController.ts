import type { Request, Response } from "express";
import { prisma } from "../config/db";
interface RegisterBody {
  name: string;
  email: string;
  password: string;
}

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body as RegisterBody;

  // If user already exist
  const userExist = await prisma.user;
};

export { register };
