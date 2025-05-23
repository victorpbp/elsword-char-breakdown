import { useState, createContext, useContext, ReactNode, useEffect } from "react";

import KE from '@/app/public/partySynTest/ke.png'
import IronBody from '@/app/public/partySynTest/ironBody.png'

import type { StaticImageData } from 'next/image';

type PartySynSkill = {
    skillName: string;
    skillIcon: StaticImageData;
    description: string;
};

type PartySynItem = {
    mainColor: string;
    name: string;
    icon: StaticImageData;
    command: string;
    notes: string;
    skills: PartySynSkill[];
};
  
type PartySynContextType = {
    isOpenPartySyn: boolean;
    targetTerm: string | null;
    partySynItems: PartySynItem[];
    openPartySyn: (term?: string) => void;
    closePartySyn: () => void;
};

const PartySynContext = createContext<PartySynContextType | undefined>(undefined);

export function PartySynProvider({ children }: { children: ReactNode }) {
    const [isOpenPartySyn, setIsOpenPartySyn] = useState(false);
    const [targetTerm, setTargetTerm] = useState<string | null>(null);

    const partySynItems: PartySynItem[] = [
        {
            mainColor: "#b75b5b",
            name: "Knight Emperor (KE)",
            icon: KE,
            command: "Armageddon Blade, → → ↑ zzz, → → ↑ xx (Destruction)",
            notes: "Wind Slicer reduces Special Active cooldown -7s at 45% chance w/ Commands, 5s CD",
            skills: [
                {
                    skillName: "Iron Body (Buff)",
                    skillIcon: IronBody,
                    description: "Increases defense by 20% for 10 seconds.",
                },
                {
                    skillName: "Iron Body (Buff)",
                    skillIcon: IronBody,
                    description: "Increases defense by 20% for 10 seconds.",
                },
                {
                    skillName: "Iron Body (Buff)",
                    skillIcon: IronBody,
                    description: "Increases defense by 20% for 10 seconds.",
                },
                // Add more skills here
            ],
        },
        {
            mainColor: "#b75b5b",
            name: "Knight Emperor (KE)",
            icon: KE,
            command: "Armageddon Blade, → → ↑ zzz, → → ↑ xx (Destruction)",
            notes: "Wind Slicer reduces Special Active cooldown -7s at 45% chance w/ Commands, 5s CD",
            skills: [
                {
                    skillName: "Iron Body (Buff)",
                    skillIcon: IronBody,
                    description: "Increases defense by 20% for 10 seconds.",
                },
                {
                    skillName: "Iron Body (Buff)",
                    skillIcon: IronBody,
                    description: "Increases defense by 20% for 10 seconds.",
                },
                {
                    skillName: "Iron Body (Buff)",
                    skillIcon: IronBody,
                    description: "Increases defense by 20% for 10 seconds.",
                },
                // Add more skills here
            ],
        },
        {
            mainColor: "#b75b5b",
            name: "Knight Emperor (KE)",
            icon: KE,
            command: "Armageddon Blade, → → ↑ zzz, → → ↑ xx (Destruction)",
            notes: "Wind Slicer reduces Special Active cooldown -7s at 45% chance w/ Commands, 5s CD",
            skills: [
                {
                    skillName: "Iron Body (Buff)",
                    skillIcon: IronBody,
                    description: "Increases defense by 20% for 10 seconds.",
                },
                {
                    skillName: "Iron Body (Buff)",
                    skillIcon: IronBody,
                    description: "Increases defense by 20% for 10 seconds.",
                },
                {
                    skillName: "Iron Body (Buff)",
                    skillIcon: IronBody,
                    description: "Increases defense by 20% for 10 seconds.",
                },
                // Add more skills here
            ],
        },
    // Add more classes here
    ];

    const openPartySyn = (term?: string) => {
        setTargetTerm(term ? `#${term}` : null);
        setIsOpenPartySyn(true);
    };

    const closePartySyn = () => {
        setTargetTerm(null);
        setIsOpenPartySyn(false);
    };

    return (
        <PartySynContext.Provider value={{ partySynItems, isOpenPartySyn, targetTerm, openPartySyn, closePartySyn }}>
            {children}
        </PartySynContext.Provider>
    );
}

export function usePartySyn() {
  const context = useContext(PartySynContext);
  if (!context) throw new Error("usePartySyn must be used within a PartySynProvider");
  return context;
}