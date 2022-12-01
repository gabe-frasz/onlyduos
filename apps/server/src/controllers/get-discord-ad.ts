import { Request, Response } from "express";
import { prisma } from "../services";

export const getDiscordAd = async (req: Request, res: Response) => {
  const adId = req.params.id;

  try {
    const discord = await prisma.ad.findUniqueOrThrow({
      select: {
        discord: true,
      },
      where: {
        id: adId,
      },
    });

    return res.status(200).json(discord);
  } catch {
    return res.status(400).json({
      message: "Invalid Ad id",
    });
  }
};
