import type { NextApiRequest, NextApiResponse } from "next";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/user-services";
import { connectDb } from "../../utils/db-connect";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDb();
  switch (req.method) {
    case "GET":
      try {
        const user = await getUsers();
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    case "POST":
      await createUser(req, res);
      break;
    case "PUT":
      await updateUser(req, res);
      break;
    case "DELETE":
      await deleteUser(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
  }
}
