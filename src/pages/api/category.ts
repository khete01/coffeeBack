import type { NextApiRequest, NextApiResponse } from "next";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../services/category-services";
import { connectDb } from "../../utils/db-connect";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDb();
  switch (req.method) {
    case "GET":
      try {
        const categories = await getCategories();
        res.status(200).json(categories);
      } catch (error) {
        res.status(500).json({ error: "Failed to GET categories" });
      }
      break;
    case "POST":
      await createCategory(req, res);
      break;
    case "PUT":
      await updateCategory(req, res);
      break;
    case "DELETE":
      await deleteCategory(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
