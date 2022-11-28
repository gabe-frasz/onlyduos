import express, { Request, Response } from "express";

export const routes = express.Router();

routes.route("/games").get((req: Request, res: Response) => {});

routes.route("/games/:id/ads").get((req: Request, res: Response) => {});

routes.route("/ads").post((req: Request, res: Response) => {});

routes.route("/ads/:id/discord").get((req: Request, res: Response) => {});
