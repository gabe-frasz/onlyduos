import express, { Request, Response } from "express";
import { prisma } from "./services";

export const routes = express.Router();

routes.route("/games").get(async (req: Request, res: Response) => {
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
});

routes.route("/games/:id/ads").get((req: Request, res: Response) => {});

routes.route("/ads").post((req: Request, res: Response) => {});

routes.route("/ads/:id/discord").get((req: Request, res: Response) => {});
