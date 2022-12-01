import { Request, Response } from "express";
import { prisma } from "../services";
import { convertHourStringToMinutes } from "../utils/convert-hour-string-to-minutes";

export const createAd = async (req: Request, res: Response) => {
  const gameId = req.params.id;

  await prisma.ad.create({
    data: {
      gameId,
      discord: req.body.discord,
      name: req.body.name,
      yearsPlaying: req.body.yearsPlaying,
      weekDays: req.body.weekDays,
      hourStart: convertHourStringToMinutes(req.body.hourStart),
      hourEnd: convertHourStringToMinutes(req.body.hourEnd),
      useVoiceChannel: req.body.useVoiceChannel,
    },
  });

  return res.status(201).send();
};
