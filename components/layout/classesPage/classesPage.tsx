'use client';

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function ClassesPage() {

    // We need a table here to show all classes in the correct categories, etc
    // Each class should have its own page, with a link to it
  
    const [classes, setClasses] = useState('');
    const updateClasses = (e: React.ChangeEvent<HTMLInputElement>) => {
      setClasses(e.target.value);
    }

    return (
      <div
        className="flex flex-col items-center justify-center gap-4 p-4 bg-zinc-700 rounded-2xl text-base"
      >
        <p>This is the page showing all classes</p>
        <p>For now, please, type a class to continue</p>
        <Input onChange={(e) => updateClasses(e)}/>
        <Link className="
          p-4 rounded-md bg-zinc-800
          hover:bg-zinc-950
          font-semibold
          transition-all duration-200 ease-in-out
        " href={`/classes/${classes}`}>Go to the Class' Page</Link>
      </div>
    );
  }
  