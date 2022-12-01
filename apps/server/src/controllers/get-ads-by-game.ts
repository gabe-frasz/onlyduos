import { Request, Response } from "express";
import { prisma } from "../services";
import { convertMinutesToHourString } from "../utils/convert-minutes-to-hour-string";

export const getAdsByGame = async (req: Request, res: Response) => {
  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      discord: false,
      id: true,
      name: true,
      yearsPlaying: true,
      weekDays: true,
      hourStart: true,
      hourEnd: true,
      useVoiceChannel: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.status(200).json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
        hourStart: convertMinutesToHourString(ad.hourStart),
        hourEnd: convertMinutesToHourString(ad.hourEnd),
      };
    })
  );
};
