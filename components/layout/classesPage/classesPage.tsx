'use client';

import { Input } from "@/components/fromTemplate/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function ClassesPage() {

  // Make a context for the positioning of each class on different tables
  // Each table is a different kind of class (e.g. High/Mid/Low Synergy, Support)
  // The component loops that and creates a table for each kind and puts all classes in each table
  // Each class has an icon, name and description
  // Hovering on the class shows a tooltip with the class' name and description
  // Clicking on the class redirects to the class' page with more information
  // There should be another context for the class' page that shows all the information about the class
  // In order to make sure not to force the user to load so much information at once
  // Though, for the final version, this is irrelevant, as the backend will return only what is needed
  
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
  