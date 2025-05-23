import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { useGlossary } from "./glossary/glossaryContext";
import { useMobileMenu } from "./mobileMenu/mobileMenuContext"; // Example for future
import { usePartySyn } from "./partySyn/partySynContext";

type OverlayType = "glossary" | "mobileMenu" | "partySyn" | null;

type OverlayControlContextType = {
  openOverlay: (overlay: OverlayType, term?: string) => void;
  closeOverlay: () => void;
};

const OverlayControlContext = createContext<OverlayControlContextType | undefined>(undefined);

export function OverlayControlProvider({ children }: { children: ReactNode }) {
  const { openGlossary, closeGlossary } = useGlossary();
  const { openMobileMenu, closeMobileMenu } = useMobileMenu();
  const { openPartySyn, closePartySyn } = usePartySyn();

  const [currentOverlay, setCurrentOverlay] = useState<OverlayType>(null);

  const closeAllOverlays = useCallback(() => {
    closeGlossary();
    closeMobileMenu();
    closePartySyn();
    // ...close others as you add them
  }, [closeGlossary, closeMobileMenu]);

  const openOverlay = useCallback((overlay: OverlayType, term?: string) => {
    closeAllOverlays();
    setCurrentOverlay(overlay);
    if (overlay === "glossary") openGlossary(term);
    else if (overlay === "mobileMenu") openMobileMenu();
    else if (overlay === "partySyn") openPartySyn(term);
  }, [closeAllOverlays, openGlossary, openMobileMenu]);

  const closeOverlay = useCallback(() => {
    closeAllOverlays();
    setCurrentOverlay(null);
  }, [closeAllOverlays]);

  return (
    <OverlayControlContext.Provider value={{ openOverlay, closeOverlay }}>
      {children}
    </OverlayControlContext.Provider>
  );
}

export function useOverlayControl() {
  const ctx = useContext(OverlayControlContext);
  if (!ctx) throw new Error("useOverlayControl must be used within OverlayControlProvider");
  return ctx;
}