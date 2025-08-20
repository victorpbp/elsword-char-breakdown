import { useState, createContext, useContext, ReactNode } from "react";

import type { StaticImageData } from 'next/image';

import portraitES from "@/app/public/classes/Portrait_-_Empire_Sword_Master.png"
import portraitFL from "@/app/public/classes/Portrait_-_Flame_Lord_Master.png"
import portraitBQ from "@/app/public/classes/Portrait_-_Bloody_Queen_Master.png"
import portraitAD from "@/app/public/classes/Portrait_-_Adrestia_Master.png"

type CharactersNames = "Elsword" | "Rena" | "Aisha" | "Raven" | "Eve" | "Chung" | "Ara" | "Elesis" | "Add" | "LuCiel" | "Rose" | "Ain" | "Laby" | "Noah" | "Lithia";

type ClassesRole = "HighSyn" | "MidSyn" | "LowSyn" | "Support";

export type Characters = {
    name: CharactersNames;
    mainColor: string;
    icon: StaticImageData | string; //Icon can be a StaticImageData or a string URL
    classes: ClassesItem[];
}

export type ClassesItem = {
    name: string;
    description: string;
    role: ClassesRole;
    icon: StaticImageData | string; //Icon can be a StaticImageData or a string URL
    portrait: StaticImageData | string; //Portrait can also be a StaticImageData or a string URL
    fullBody: StaticImageData | string; //Full body image can also be a StaticImageData or a string URL
    insights: string; // Preview of the class for the initial Class page
};
  
type ClassesContextType = {
    isOpenClasses: boolean;
    charactersItems: Characters[];
    classesRoles: ClassesRole[];
    openClasses: () => void;
    closeClasses: () => void;
};

const ClassesContext = createContext<ClassesContextType | undefined>(undefined);

export function ClassesProvider({ children }: { children: ReactNode }) {
    const [isOpenClasses, setIsOpenClasses] = useState(false);

    // MOCK
    function duplicateArray<T>(arr: T[], times: number): T[] {
        if (times <= 0) {
            return [];
        }
        return ([] as T[]).concat(...Array(times).fill(arr));
    }

    const classesRoles: ClassesRole[] = ["LowSyn", "MidSyn", "HighSyn", "Support"];

    const example: Characters[] = [
        {
            name: 'Elsword',
            mainColor: "#FF5733",
            icon: "https://cobodex.eu/_next/image?url=%2Fcharacter_face%2F-475784450.webp&w=64&q=75",
            classes: [
                {
                    name: "Knight Emperor (KE)",
                    description: "Elsword's first path is a decent damage dealer, even though Grand Cross is pretty slow in this meta. He provides good supporting options, such as physical damage taken and defense debuffs. It's a good class for EXP farming because of wide skill AoE like Vertical Slash or [Mod] Windmill, but note that you'll be expected to deal damage in raids.",
                    role: "LowSyn",
                    icon: "https://cobodex.eu/_next/image?url=%2Fcharacter_icons%2Fke.png&w=64&q=75",
                    fullBody: "https://cobodex.eu/_next/image?url=%2Fcharacters%2Fke.png&w=1920&q=75",
                    portrait: portraitES,
                    insights: ""
                },
                {
                    name: "Knight Emperor (KE)",
                    description: "Elsword's first path is a decent damage dealer, even though Grand Cross is pretty slow in this meta. He provides good supporting options, such as physical damage taken and defense debuffs. It's a good class for EXP farming because of wide skill AoE like Vertical Slash or [Mod] Windmill, but note that you'll be expected to deal damage in raids.",
                    role: "MidSyn",
                    icon: "https://cobodex.eu/_next/image?url=%2Fcharacter_icons%2Fke.png&w=64&q=75",
                    fullBody: "https://cobodex.eu/_next/image?url=%2Fcharacters%2Fke.png&w=1920&q=75",
                    portrait: portraitFL,
                    insights: ""
                },
                {
                    name: "Nisha",
                    description: "Elsword's first path is a decent damage dealer, even though Grand Cross is pretty slow in this meta. He provides good supporting options, such as physical damage taken and defense debuffs. It's a good class for EXP farming because of wide skill AoE like Vertical Slash or [Mod] Windmill, but note that you'll be expected to deal damage in raids.",
                    role: "HighSyn",
                    icon: "https://cobodex.eu/_next/image?url=%2Fcharacter_icons%2Fke.png&w=64&q=75",
                    fullBody: "https://cobodex.eu/_next/image?url=%2Fcharacters%2Fke.png&w=1920&q=75",
                    portrait: portraitBQ,
                    insights: ""
                },
                {
                    name: "Knight Emperor (KE)",
                    description: "Elsword's first path is a decent damage dealer, even though Grand Cross is pretty slow in this meta. He provides good supporting options, such as physical damage taken and defense debuffs. It's a good class for EXP farming because of wide skill AoE like Vertical Slash or [Mod] Windmill, but note that you'll be expected to deal damage in raids.",
                    role: "Support",
                    icon: "https://cobodex.eu/_next/image?url=%2Fcharacter_icons%2Fke.png&w=64&q=75",
                    fullBody: "https://cobodex.eu/_next/image?url=%2Fcharacters%2Fke.png&w=1920&q=75",
                    portrait: portraitAD,
                    insights: ""
                },
            ]
        }
    ]

    const charactersItems: Characters[] = duplicateArray(example, 28);

    const openClasses = () => {
        setIsOpenClasses(true);
    };

    const closeClasses = () => {
        setIsOpenClasses(false);
    };

    return (
        <ClassesContext.Provider value={{ classesRoles, charactersItems, isOpenClasses, openClasses, closeClasses }}>
            {children}
        </ClassesContext.Provider>
    );
}

export function useClasses() {
  const context = useContext(ClassesContext);
  if (!context) throw new Error("useClasses must be used within a ClassesProvider");
  return context;
}