import { useState, createContext, useContext, ReactNode } from "react";

type MobileMenuType = {
  isOpenMenu: boolean;
  openMobileMenu: (term?: string) => void;
  closeMobileMenu: () => void;
};

const MobileMenuContext = createContext<MobileMenuType | undefined>(undefined);

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMobileMenu = () => {
    setIsOpenMenu(true);
  };

  const closeMobileMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <MobileMenuContext.Provider value={{ isOpenMenu, openMobileMenu, closeMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu() {
  const context = useContext(MobileMenuContext);
  if (!context) throw new Error("useMobileMenu must be used within a MobileMenuProvider");
  return context;
}