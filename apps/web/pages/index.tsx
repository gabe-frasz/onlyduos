import Image from "next/image";
import { MagnifyingGlassPlus } from "phosphor-react";
import logoImg from "../public/images/logo.svg";

export default function Home() {
  // const { data, error } = useSWR("/helix/games/top?first=6", async (key) => {
  //   // const token = await axios.post(
  //   //   "https://id.twitch.tv/oauth2/token",
  //   //   `client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`,
  //   //   {
  //   //     headers: {
  //   //       "Content-Type": "application/x-www-form-urlencoded",
  //   //     },
  //   //   }
  //   // );

  //   return await axios.get("https://api.twitch.tv" + key, {
  //     headers: {
  //       Authorization: `Bearer r9rgln4g4e7pchmuf9c3k3hukh7g5m`,
  //       "Client-Id": process.env.NEXT_PUBLIC_CLIENT_ID,
  //     },
  //   });
  // });

  // if (error) return <div>Error</div>;

  // console.log(data);

  return (
    <div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
      <Image src={logoImg} alt="eSports logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Your{" "}
        <span className="text-transparent bg-clip-text bg-duo-gradient">
          duo
        </span>{" "}
        is here.
      </h1>

      <div className="mt-16 grid grid-cols-6 gap-6">
        {/* {data?.data.data.map((game) => (
          <a href="" className="relative rounded-lg overflow-hidden">
            <Image
              src={game.box_art_url
                .replace("{width}", "180")
                .replace("{height}", "240")}
              alt="game banner example"
              width={180}
              height={240}
            />

            <div className="absolute bottom-0 left-0 w-full px-4 pt-16 pb-4 flex flex-col gap-1 bg-game-gradient">
              <strong className="font-bold text-white">{game.name}</strong>
              <span className="text-zinc-300">4 ads</span>
            </div>
          </a>
        ))} */}
        <a href="" className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/game-1.png"
            alt="game banner example"
            width={180}
            height={240}
          />

          <div className="absolute bottom-0 left-0 w-full px-4 pt-16 pb-4 flex flex-col gap-1 bg-game-gradient">
            <strong className="font-bold text-white">League of Legends</strong>
            <span className="text-zinc-300">4 ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/game-2.png"
            alt="game banner example"
            width={180}
            height={240}
          />

          <div className="absolute bottom-0 left-0 w-full px-4 pt-16 pb-4 flex flex-col gap-1 bg-game-gradient">
            <strong className="font-bold text-white">Dota 2</strong>
            <span className="text-zinc-300">4 ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/game-3.png"
            alt="game banner example"
            width={180}
            height={240}
          />

          <div className="absolute bottom-0 left-0 w-full px-4 pt-16 pb-4 flex flex-col gap-1 bg-game-gradient">
            <strong className="font-bold text-white">CS GO</strong>
            <span className="text-zinc-300">4 ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/game-4.png"
            alt="game banner example"
            width={180}
            height={240}
          />

          <div className="absolute bottom-0 left-0 w-full px-4 pt-16 pb-4 flex flex-col gap-1 bg-game-gradient">
            <strong className="font-bold text-white">Apex Legends</strong>
            <span className="text-zinc-300">4 ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/game-5.png"
            alt="game banner example"
            width={180}
            height={240}
          />

          <div className="absolute bottom-0 left-0 w-full px-4 pt-16 pb-4 flex flex-col gap-1 bg-game-gradient">
            <strong className="font-bold text-white">Fortnite</strong>
            <span className="text-zinc-300">4 ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/game-6.png"
            alt="game banner example"
            width={180}
            height={240}
          />

          <div className="absolute bottom-0 left-0 w-full px-4 pt-16 pb-4 flex flex-col gap-1 bg-game-gradient rounded-lg">
            <strong className="font-bold text-white">WoW Shadowlands</strong>
            <span className="text-zinc-300">4 ads</span>
          </div>
        </a>
      </div>

      <div className="w-full mt-8 pt-1 bg-duo-gradient rounded-lg overflow-hidden">
        <div className="px-8 py-6 flex justify-between items-center bg-[#2A2634]">
          <div>
            <strong className="block text-2xl text-white font-black">
              Didn&apos;t you find your duo?
            </strong>
            <span className="block text-zinc-400">
              Publish an ad to find new players!
            </span>
          </div>

          <button className="px-4 py-3 flex items-center gap-3 bg-violet-500 hover:bg-violet-600 text-white rounded transition-colors">
            <MagnifyingGlassPlus size={24} />
            Publish ad
          </button>
        </div>
      </div>
    </div>
  );
}
