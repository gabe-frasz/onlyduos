import Image from "next/image";
import Link from "next/link";

interface GameBannerProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export const GameBanner = (props: GameBannerProps) => {
  return (
    <Link href="/" className="relative rounded-lg overflow-hidden">
      <Image
        src={props.bannerUrl}
        alt="game banner example"
        width={180}
        height={240}
      />

      <div className="absolute bottom-0 left-0 w-full px-4 pt-16 pb-4 flex flex-col gap-1 bg-game-gradient">
        <strong className="font-bold text-white">{props.title}</strong>

        <span className="text-zinc-300">
          {props.adsCount > 0 ? props.adsCount : ""}{" "}
          {props.adsCount > 1 ? "ads" : props.adsCount === 1 ? "ad" : "No ads"}
        </span>
      </div>
    </Link>
  );
};
