'use client';

import { GlossaryProvider } from "@/contexts/glossary/glossaryContext";
import { MobileMenuProvider } from "@/contexts/mobileMenu/mobileMenuContext";
import { OverlayControlProvider } from "@/contexts/overlayControl";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            
            <GlossaryProvider>
                <MobileMenuProvider>
                    <OverlayControlProvider>
                        {children}
                    </OverlayControlProvider>
                </MobileMenuProvider>
            </GlossaryProvider>
            
        </ThemeProvider>
    )
}