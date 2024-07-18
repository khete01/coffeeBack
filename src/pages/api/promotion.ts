import type { NextApiRequest, NextApiResponse } from "next";
import {
  getPromotions,
  createPromotion,
  updatePromotion,
  deletePromotion,
} from "../services/promotion-services";
import { connectDb } from "../../utils/db-connect";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDb();
  switch (req.method) {
    case "GET":
      try {
        const promotions = await getPromotions();
        res.status(200).json(promotions);
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    case "POST":
      await createPromotion(req, res);
      break;
    case "PUT":
      await updatePromotion(req, res);
      break;
    case "DELETE":
      await deletePromotion(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
  }
}
