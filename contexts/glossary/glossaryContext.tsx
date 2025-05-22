import { useState, createContext, useContext, ReactNode, useEffect } from "react";

type GlossaryContextType = {
  isOpen: boolean;
  targetTerm: string | null;
  glossaryItems: { title: string; description: string }[];
  openGlossary: (term?: string) => void;
  closeGlossary: () => void;
};

const GlossaryContext = createContext<GlossaryContextType | undefined>(undefined);

export function GlossaryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [targetTerm, setTargetTerm] = useState<string | null>(null);

  const [glossaryItems, setGlossaryItems] = useState<{ title: string; description: string }[]>([
    {
      title: "Synergy",
      description: "Divided in low/medium/High, it's the amount of offensive and useful buffs/debuffs a character can provide.",
    },
    {
      title: "Damage Amp",
      description: "Part of synergy, composed of buffs/debuffs that increase the damage done by a Character",
    },
    {
      title: "Utility",
      description: "Part of synergy, composed mostly of buffs that are mostly defensive in nature (Super armor, dmg reduction, healing …)",
    },
    {
      title: "Synergy DPS",
      description: "A character that is not able to heal,freeze and cleanse at the same time, while some of them could be budget supports, that is not their main goal.",
    },
    {
      title: "Support",
      description: "A character that is able to heal, freeze and cleanse at the same time, while some of them could be Synergy dps, that is not their main goal.",
    },
    {
      title: "Reaper",
      description: "Title used mostly by supports (that do not have access to 19-4) obtained in “Heart of Behemoth”, this title shreds the defence of the enemy hit.",
    },
    {
      title: "17-1",
      description: "Title used mostly by supports (that do not have access to 19-4) obtained in “ Theme Park Entrance”, this title shreds the defence of the enemy hit.",
    },
    {
      title: "Solace",
      description: "Title used mostly by supports (that do not have access to 19-4) obtained in “Solace’s Fortress”, this title shreds the elemental defence of the enemy hit.",
    },
    {
      title: "19-4",
      description: "Title used mostly by supports obtained in “The Great Steel Wall”, this title shreds both the defence and the elemental defence of the enemy hit while also working as a resurrection title and granting a small healing.",
    },
    {
      title: "Res Title",
      description: "Titles that allow you to remain with 1 HP and avoid death once the titles are the following: Eclipse (10-4), Forge in NA (12-2),  Freed Shadow (17-5), Night parade of yada yada (15-6), Concerto (20-5), Attack of steel machine (19-4), Arcane Glyphs (Comes from Iceburners, forget about it) *They all share the same cooldown* “Yapping yada about supports”",
    },
    {
      title: "DPS Titles",
      description: "Titles that increase the damage when they are constantly on (mostly used by Synergy DPS) the titles are the following: Survival of the cold (13-4), Black and white (15-6), Order (NaTuRaL FlOw) (Abyss raid), Dogma (21-4) *The titles are not interchangeable, they are listed from weaker to stronger*",
    },
    {
      title: "Utility Titles",
      description: "Titles that are mostly used for their secondary effect, while they might seem bad they are most of the time necessary or atleast needed the titles are the following: Guardian of Secret Closed Space (obtained by exchange to Ariel), The setting SUN (13-5), NIGHT PARADE OF THE WHITE-GHOST(15-6), Versatility (15-5), Crest of Masteroad (Master roads).",
    },
    {
      title: "ASD",
      description: "ASD stands for All skill damage, a statistic that increases the dmg of all the skills “Except master and Hyper skills” (Lmao) “Oz’s power from Oz”",
    },
    {
      title: "SSD",
      description: "SSD stands for Specific skill damage, a statistic that increases the dmg of a specific skill or a specific type of skills. “Revenge of Blood from BQ”",
    },
    {
      title: "STD",
      description: "STD stands for Skill tier damage, a statistic that increases the dmg of a specific skill tier.  “Mana flow from RM”",
    },
  ]);

  const openGlossary = (term?: string) => {
    setTargetTerm(term ? `#${term}` : null);
    setIsOpen(true);
  };

  const closeGlossary = () => {
    setTargetTerm(null);
    setIsOpen(false);
  };

  return (
    <GlossaryContext.Provider value={{ glossaryItems, isOpen, targetTerm, openGlossary, closeGlossary }}>
      {children}
    </GlossaryContext.Provider>
  );
}

export function useGlossary() {
  const context = useContext(GlossaryContext);
  if (!context) throw new Error("useGlossary must be used within a GlossaryProvider");
  return context;
}