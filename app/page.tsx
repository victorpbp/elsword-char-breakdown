import Image from "next/image";
import homeArt from "./public/homeArt.png";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="
      flex flex-col p-4 gap-4
      bg-zinc-700
      rounded-2xl
      text-base
      ">
        <h1 className="text-violet-300 opacity-75 text-2xl">Hi, guest!</h1>
        <p>This web app includes certain useful information about the game "Elsword", a 2.5D side-scrolling MMORPG owned by KOG Games.</p>
        <p>On this page, one can find in-depth explanation about characters, gameplay, gear and skill guidance as well as terminology used by the playerbase.</p>
        <p>We do not own Elsword. Used materials, which are trademarks and copyrights of KOG Studios, Nexon, Gameforge, KOG Games or its licensors, serve a purely representative, non-commercial purpose as of fair use. All rights reserved.</p>
        <p><Link className="font-semibold" href={"/glossary#Res Title"}>Res Title</Link> definition in Glossary</p>
      </div>
      <div className="flex justify-center items-center">
        <Image width={400} height={400} src={homeArt} alt="Artwork"/>
      </div>
    </>
  );
}
