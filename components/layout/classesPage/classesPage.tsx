'use client';

import { useClasses } from "@/contexts/classes/classesContext";
import Image from "next/image";

export default function ClassesPage() {

  const { classesItems, classesRoles } = useClasses();

  // Make a context for the positioning of each class on different tables
  // Each table is a different kind of class (e.g. High/Mid/Low Synergy, Support)
  // The component loops that and creates a table for each kind and puts all classes in each table
  // Each class has an icon, name and description
  // Hovering on the class shows a tooltip with the class' name and description
  // Clicking on the class redirects to the class' page with more information
  // There should be another context for the class' page that shows all the information about the class
  // In order to make sure not to force the user to load so much information at once
  // Though, for the final version, this is irrelevant, as the backend will return only what is needed

    return (
      <div
        className="flex flex-col items-center justify-center gap-4 p-4 bg-zinc-700 rounded-xl text-base"
      >
        {classesRoles.map((role) => (
          <div key={role} className="w-full max-w-4xl border-2 border-zinc-500 p-4 rounded-lg bg-zinc-800 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">{
              role.charAt(0).toUpperCase() + role.slice(1).replace("Syn", " Synergy")
            }</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
              {classesItems
                .filter(item => item.role === role)
                .map((item) => (
                  <div
                    key={item.name}
                    className="cursor-pointer"
                    onClick={() => window.location.href = `/classes/${item.name.toLowerCase().replace(/\s+/g, '_')}`}
                  >
                    <Image src={item.icon} width={48} height={48} alt={item.name} />
                    {/*
                    Make this into a tooltip?
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p> 
                    */}

                  </div>
                ))}
            </div>

          </div>
        ))}
      {
        //Could add the description for each role here at the bottom
      }
      </div>
    );
  }
  