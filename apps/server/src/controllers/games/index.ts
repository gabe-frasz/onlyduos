import { Request, Response } from "express";
import { adSchema } from "zod-schemas";
import { prisma } from "../../services";
import {
  convertHourStringToMinutes,
  convertMinutesToHourString,
} from "../../utils";

/*
 * @desc    Get all games
 * @route   GET /games
 * @access  Public
 */
export const getGames = async (req: Request, res: Response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return res.status(200).json(games);
};

/*
 * @desc    Get all ads by gameId
 * @route   GET /games/:id/ads
 * @access  Public
 */
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

/*
 * @desc    Get ad's discord
 * @route   GET /ads/:id/discord
 * @access  Public
 */
export const getDiscord = async (req: Request, res: Response) => {
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

/*
 * @desc    Create an ad
 * @route   POST /games/:id/ads
 * @access  Public
 */
export const createAd = async (req: Request, res: Response) => {
  const gameId = req.params.id;

  const parsedBody = adSchema
    .omit({
      id: true,
      gameId: true,
      createdAt: true,
    })
    .safeParse(req.body);

  if (!parsedBody.success) {
    return res.status(400).send(parsedBody.error.message);
  }

  await prisma.ad.create({
    data: {
      gameId,
      discord: parsedBody.data.discord,
      name: parsedBody.data.name,
      yearsPlaying: parsedBody.data.yearsPlaying,
      weekDays: parsedBody.data.weekDays.join(","),
      hourStart: convertHourStringToMinutes(parsedBody.data.hourStart),
      hourEnd: convertHourStringToMinutes(parsedBody.data.hourEnd),
      useVoiceChannel: parsedBody.data.useVoiceChannel,
    },
  });

  return res.status(201).send();
};
