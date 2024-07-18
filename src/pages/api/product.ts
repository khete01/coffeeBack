import type { NextApiRequest, NextApiResponse } from "next";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../services/product-services";
import { connectDb } from "../../utils/db-connect";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDb();
  switch (req.method) {
    case 'GET':
      try {
        const products = await getProducts();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    case 'POST':
      await createProduct(req, res);
      break;
    case "PUT":
      await updateProduct(req, res);
      break;
    case 'DELETE':
      await deleteProduct(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
