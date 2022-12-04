import express from "express";
import { createAd, getAdsByGame, getDiscord, getGames } from "./controllers";

export const routes = express.Router();

routes.route("/games").get(getGames);

routes.route("/games/:id/ads").get(getAdsByGame).post(createAd);

routes.route("/ads/:id/discord").get(getDiscord);
