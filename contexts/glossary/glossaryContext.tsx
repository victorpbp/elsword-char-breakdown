import { useState, createContext, useContext, ReactNode } from "react";

type GlossaryContextType = {
  isOpen: boolean;
  targetTerm: string | null;
  openGlossary: (term?: string) => void;
  closeGlossary: () => void;
};

const GlossaryContext = createContext<GlossaryContextType | undefined>(undefined);

export function GlossaryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [targetTerm, setTargetTerm] = useState<string | null>(null);

  const openGlossary = (term?: string) => {
    setIsOpen(true);
    setTargetTerm(term ?? null);
  };

  const closeGlossary = () => {
    setIsOpen(false);
    setTargetTerm(null);
  };

  return (
    <GlossaryContext.Provider value={{ isOpen, targetTerm, openGlossary, closeGlossary }}>
      {children}
    </GlossaryContext.Provider>
  );
}

export function useGlossary() {
  const context = useContext(GlossaryContext);
  if (!context) throw new Error("useGlossary must be used within a GlossaryProvider");
  return context;
}