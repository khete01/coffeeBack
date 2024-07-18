import type { NextApiRequest, NextApiResponse } from "next";
import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../../services/order-service";
import { connectDb } from "../../utils/db-connect";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDb();
  switch (req.method) {
    case "GET":
      try {
        const orders = await getOrders();
        res.status(200).json(orders);
      } catch (error) {
        res.status(500).json({ error: "Failed to GET orders" });
      }
      break;
    case "POST":
      await createOrder(req, res);
      break;
    case "PUT":
      await updateOrder(req, res);
      break;
    case "DELETE":
      await deleteOrder(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
