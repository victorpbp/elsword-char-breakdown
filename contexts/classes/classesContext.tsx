import { useState, createContext, useContext, ReactNode } from "react";

import type { StaticImageData } from 'next/image';

//Rethink this approach, may be best to use Markdown directly, since this will be the final result to render.
//Anything within ClassInsight should just be subbed by a Markdown file for that class instead
//Icon, name, description, role, fullBody should all be kept as they are currently.

type ClassesRole = "HighSyn" | "MidSyn" | "LowSyn" | "Support";

/* type ClassesSkill = {
    skillName: string;
    skillIcon: StaticImageData;
    description?: string; //Might be unecessary
};

type ClassSkillBars = {
    skillBarName: string;
    skillBarDescription: string;
    skillsInfo: ClassesSkill[];
};

type ClassInsight = {
    classSkillBars: ClassSkillBars[];
}; */

type ClassesItem = {
    mainColor: string;
    name: string;
    description: string;
    role: ClassesRole;
    icon: StaticImageData | string; //Icon can be a StaticImageData or a string URL
    fullBody: StaticImageData | string; //Full body image can also be a StaticImageData or a string URL
    insights: string; //This will be the markdown file path or content
};
  
type ClassesContextType = {
    isOpenClasses: boolean;
    classesItems: ClassesItem[];
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

    const classesRoles: ClassesRole[] = ["HighSyn", "MidSyn", "LowSyn", "Support"];

    const example: ClassesItem[] = [
        {
            mainColor: "#FF5733",
            name: "Knight Emperor (KE)",
            description: "Elsword's first path is a decent damage dealer, even though Grand Cross is pretty slow in this meta. He provides good supporting options, such as physical damage taken and defense debuffs. It's a good class for EXP farming because of wide skill AoE like Vertical Slash or [Mod] Windmill, but note that you'll be expected to deal damage in raids.",
            role: "HighSyn",
            icon: "https://cobodex.eu/_next/image?url=%2Fcharacter_icons%2Fke.png&w=64&q=75",
            fullBody: "https://cobodex.eu/_next/image?url=%2Fcharacters%2Fke.png&w=1920&q=75",
            insights: ""
        },        {
            mainColor: "#FF5733",
            name: "Knight Emperor (KE)",
            description: "Elsword's first path is a decent damage dealer, even though Grand Cross is pretty slow in this meta. He provides good supporting options, such as physical damage taken and defense debuffs. It's a good class for EXP farming because of wide skill AoE like Vertical Slash or [Mod] Windmill, but note that you'll be expected to deal damage in raids.",
            role: "MidSyn",
            icon: "https://cobodex.eu/_next/image?url=%2Fcharacter_icons%2Fke.png&w=64&q=75",
            fullBody: "https://cobodex.eu/_next/image?url=%2Fcharacters%2Fke.png&w=1920&q=75",
            insights: ""
        },
        {
            mainColor: "#FF5733",
            name: "Knight Emperor (KE)",
            description: "Elsword's first path is a decent damage dealer, even though Grand Cross is pretty slow in this meta. He provides good supporting options, such as physical damage taken and defense debuffs. It's a good class for EXP farming because of wide skill AoE like Vertical Slash or [Mod] Windmill, but note that you'll be expected to deal damage in raids.",
            role: "LowSyn",
            icon: "https://cobodex.eu/_next/image?url=%2Fcharacter_icons%2Fke.png&w=64&q=75",
            fullBody: "https://cobodex.eu/_next/image?url=%2Fcharacters%2Fke.png&w=1920&q=75",
            insights: ""
        },
        {
            mainColor: "#FF5733",
            name: "Knight Emperor (KE)",
            description: "Elsword's first path is a decent damage dealer, even though Grand Cross is pretty slow in this meta. He provides good supporting options, such as physical damage taken and defense debuffs. It's a good class for EXP farming because of wide skill AoE like Vertical Slash or [Mod] Windmill, but note that you'll be expected to deal damage in raids.",
            role: "Support",
            icon: "https://cobodex.eu/_next/image?url=%2Fcharacter_icons%2Fke.png&w=64&q=75",
            fullBody: "https://cobodex.eu/_next/image?url=%2Fcharacters%2Fke.png&w=1920&q=75",
            insights: ""
        },
    ]

    const classesItems: ClassesItem[] = duplicateArray(example, 28);

    const openClasses = () => {
        setIsOpenClasses(true);
    };

    const closeClasses = () => {
        setIsOpenClasses(false);
    };

    return (
        <ClassesContext.Provider value={{ classesRoles, classesItems, isOpenClasses, openClasses, closeClasses }}>
            {children}
        </ClassesContext.Provider>
    );
}

export function useClasses() {
  const context = useContext(ClassesContext);
  if (!context) throw new Error("useClasses must be used within a ClassesProvider");
  return context;
}