import { CreateAdBanner } from "@/components/layouts";
import { GameBanner } from "@/components/widgets";
import { fetcher } from "@/services";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import useSWR from "swr";
import { z } from "zod";
import { gameSchema } from "zod-schemas";
import logoImg from "../public/images/logo.svg";

// TODO: add react-hook-form

type GameType = z.infer<typeof gameSchema> & { _count: { ads: number } };

export default function Home() {
  const { data: games, error } = useSWR<GameType[]>("/games", fetcher);

  const errorComponent = error ? <div>Error</div> : null;

  return (
    <div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
      <Image
        src={logoImg}
        alt="eSports logo"
        className="w-3/4 sm:w-full max-w-[280px]"
      />

      <h1 className="text-3xl sm:text-6xl text-white font-black mt-20">
        Your{" "}
        <span className="text-transparent bg-clip-text bg-duo-gradient">
          duo
        </span>{" "}
        is here.
      </h1>

      <Splide
        options={{
          autoWidth: true,
          breakpoints: {
            1024: {
              arrows: false,
              drag: true,
              gap: "20px",
            },
          },
          drag: false,
          gap: "32px",
          pagination: false,
        }}
        className="w-3/4 sm:w-full mt-16"
      >
        {games?.map((game) => (
          <SplideSlide key={game.title}>
            <GameBanner
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          </SplideSlide>
        )) ?? errorComponent}
      </Splide>

      <CreateAdBanner />
    </div>
  );
}
