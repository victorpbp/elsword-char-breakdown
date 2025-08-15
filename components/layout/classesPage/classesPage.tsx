'use client';

import { useClasses } from "@/contexts/classes/classesContext";
import Image from "next/image";
import ClassesPageSideMenu from "./classesPageSideMenu/classesPageSideMenu";

export default function ClassesPage() {

  const { charactersItems, classesRoles } = useClasses();

    return (
      <div className="p-4 -mt-6 md:mt-0 ml-16" >
        {classesRoles.map((role) => (
          <div key={role} className={`w-full max-w-4xl border-2 border-zinc-500 p-4 rounded-lg mb-4
          ${role === 'HighSyn' ? 'bg-green-900' : role === 'MidSyn' ? 'bg-yellow-900' : role === 'LowSyn' ? 'bg-red-900' : 'bg-blue-900'}
          `}>
            <h2 className="text-2xl font-bold text-white mb-4">{
              role.charAt(0).toUpperCase() + role.slice(1).replace("Syn", " Synergy")
            }</h2>
            <div className="flex flex-row flex-wrap gap-4">
              {charactersItems.map((item) =>
                // Filter classes by the current role
                item.classes
                .filter(item => item.role === role)
                .map((item) => (
                  <div
                    key={item.name}
                    className="cursor-pointer p-1 bg-zinc-600 hover:bg-zinc-300
                    transition-colors duration-200"
                    onClick={() => window.location.href = `/classes/${item.name.toLowerCase().replace(/\s+/g, '_')}`}
                  >
                    <Image src={item.icon} width={48} height={48} alt={item.name} />
                  </div>
                )))}
            </div>

          </div>
        ))}
      {
        //Could add the description for each role here at the bottom
      }
      <ClassesPageSideMenu />
      </div>
    );
  }
  