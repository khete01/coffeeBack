import type { NextApiRequest, NextApiResponse } from "next";
import {
  getProducts,
  createProduct,
  updateProducts,
  deleteProduct,
} from "../../pages/services/product-services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const products = await getProducts();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: "Failed to GET products" });
      }
      break;
    case "POST":
      await createProduct(req, res);
      break;
    case "PUT":
      await updateProducts(req, res);
      break;
    case "DELETE":
      await deleteProduct(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
  }
}
