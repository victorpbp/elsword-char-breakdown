'use client';

import { Input } from "@/components/fromTemplate/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function RaidPage() {
  
    const [raid, setPlaystyle] = useState('');
    const updatePlaystyle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPlaystyle(e.target.value);
    }

    return (
      <div
        className="flex flex-col items-center justify-center gap-4 p-4 bg-zinc-700 rounded-2xl text-base"
      >
        <p>This is the page showing all Playstyles</p>
        <p>For now, please, type a playstyle to continue</p>
        <Input onChange={(e) => updatePlaystyle(e)}/>
        <Link className="
          p-4 rounded-md bg-zinc-800
          hover:bg-zinc-950
          font-semibold
          transition-all duration-200 ease-in-out
        " href={`/playstyle/${playstyle}`}>Go to the Playstyle's Page</Link>
      </div>
    );
  }
  