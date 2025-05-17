'use client';

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function RaidPage() {
  
    const [raid, setRaid] = useState('');
    const updateRaid = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRaid(e.target.value);
    }

    return (
      <div
        className="flex flex-col items-center justify-center gap-4 p-4 bg-zinc-700 rounded-2xl text-base"
      >
        <p>This is the page showing all Raids</p>
        <p>For now, please, type a raid to continue</p>
        <Input onChange={(e) => updateRaid(e)}/>
        <Link className="
          p-4 rounded-md bg-zinc-800
          hover:bg-zinc-950
          font-semibold
          transition-all duration-200 ease-in-out
        " href={`/playstyle/${raid}`}>Go to the Raid's Page</Link>
      </div>
    );
  }
  