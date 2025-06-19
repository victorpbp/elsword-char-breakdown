import { useState, createContext, useContext, ReactNode } from "react";

import type { StaticImageData } from 'next/image';

//Rethink this approach, may be best to use Markdown directly, since this will be the final result to render.
//Anything within ClassInsight should just be subbed by a Markdown file for that class instead
//Icon, name, description, role, fullBody should all be kept as they are currently.

type ClassesRole = "HighSyn" | "MidSyn" | "LowSyn" | "Sup";

type ClassesSkill = {
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
};

type ClassesItem = {
    mainColor: string;
    name: string;
    description: string;
    role: ClassesRole;
    icon: StaticImageData;
    fullBody: StaticImageData;
    insights: ClassInsight[];
};
  
type ClassesContextType = {
    isOpenClasses: boolean;
    classesItems: ClassesItem[];
    openClasses: () => void;
    closeClasses: () => void;
};

const ClassesContext = createContext<ClassesContextType | undefined>(undefined);

export function ClassesProvider({ children }: { children: ReactNode }) {
    const [isOpenClasses, setIsOpenClasses] = useState(false);

    const classesItems: ClassesItem[] = []

    const openClasses = () => {
        setIsOpenClasses(true);
    };

    const closeClasses = () => {
        setIsOpenClasses(false);
    };

    return (
        <ClassesContext.Provider value={{ classesItems, isOpenClasses, openClasses, closeClasses }}>
            {children}
        </ClassesContext.Provider>
    );
}

export function useClasses() {
  const context = useContext(ClassesContext);
  if (!context) throw new Error("useClasses must be used within a ClassesProvider");
  return context;
}