import { z } from "zod";

export const gameSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  bannerUrl: z.string().url(),
});

export const adSchema = z.object({
  id: z.string().uuid(),
  gameId: z.string().uuid(),
  name: z.string(),
  yearsPlaying: z.number().nonnegative(),
  discord: z.string(),
  weekDays: z.array(z.number().min(0).max(6)),
  hourStart: z.string(),
  hourEnd: z.string(),
  useVoiceChannel: z.boolean(),
  createdAt: z.date(),
});
