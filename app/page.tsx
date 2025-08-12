import Image from "next/image";
import aishaChibi from "./public/aishaChibi.png";
import elesisChibi from "./public/elesisChibi.png";
import elswordChibi from "./public/elswordChibi.png";
import ravenChibi from "./public/ravenChibi.png";

export default async function Home() {
  return (
    <div
    className="flex flex-col items-center justify-center
      p-4 lg:max-w-5xl
      lg:flex-row gap-8">
      <div className="
      flex flex-col p-4 gap-4
      bg-zinc-700
      rounded-2xl
      text-base
      lg:w-1/2
      ">
        <h1 className="text-violet-300 opacity-75 text-2xl flex-">Hi, guest!</h1>
        <p>This web app includes certain useful information about the game "Elsword", a 2.5D side-scrolling MMORPG owned by KOG Games.</p>
        <p>On this page, one can find in-depth explanation about characters, gameplay, gear and skill guidance as well as terminology used by the playerbase.</p>
        <p>We do not own Elsword. Used materials, which are trademarks and copyrights of KOG Studios, Nexon, Gameforge, KOG Games or its licensors, serve a purely representative, non-commercial purpose as of fair use. All rights reserved.</p>
      </div>
      <div className="md:w-1/2 grid grid-cols-2 justify-center items-center">
        <Image width={220} height={220} src={aishaChibi} alt="Artwork"/>
        <Image width={220} height={220} src={elesisChibi} alt="Artwork"/>
        <Image width={220} height={220} src={elswordChibi} alt="Artwork"/>
        <Image width={220} height={220} src={ravenChibi} alt="Artwork"/>
      </div>
    </div>
  );
}
