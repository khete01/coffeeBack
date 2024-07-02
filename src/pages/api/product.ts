// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      console.log("GET request");
      break;
    case "POST":
      console.log("POST request");
      break;
    case "PUT":
      console.log("PUT request");
      break;
  }
  res.status(200).json({ name: "John Doe" });
}
