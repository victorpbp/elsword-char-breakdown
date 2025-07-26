'use client';

import { useClasses } from "@/contexts/classes/classesContext";
import Image from "next/image";

export default function ClassesPage() {

  const { classesItems, classesRoles } = useClasses();

    return (
      <div>
        {classesRoles.map((role) => (
          <div key={role} className={`w-full max-w-4xl border-2 border-zinc-500 p-4 rounded-lg mb-6
          ${role === 'HighSyn' ? 'bg-red-900' : role === 'MidSyn' ? 'bg-yellow-900' : role === 'LowSyn' ? 'bg-green-900' : 'bg-blue-900'}
          `}>
            <h2 className="text-2xl font-bold text-white mb-4">{
              role.charAt(0).toUpperCase() + role.slice(1).replace("Syn", " Synergy")
            }</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
              {classesItems
                .filter(item => item.role === role)
                .map((item) => (
                  <div
                    key={item.name}
                    className="cursor-pointer p-1 bg-zinc-600 hover:bg-zinc-300
                    transition-colors duration-200"
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
  