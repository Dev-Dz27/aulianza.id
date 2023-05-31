import prisma from "@/common/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await prisma.projects.findMany();
    console.log("🚀 aulianza ~ response => ", response);

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    res.status(200).json({ success: false });
  }
}
