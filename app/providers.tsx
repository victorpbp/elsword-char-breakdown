'use client';

import { GlossaryProvider } from "@/contexts/glossary/glossaryContext";
import { MobileMenuProvider } from "@/contexts/mobileMenu/mobileMenuContext";
import { OverlayControlProvider } from "@/contexts/overlayControl";
import { PartySynProvider } from "@/contexts/partySyn/partySynContext";
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
                <PartySynProvider>
                    <MobileMenuProvider>
                        <OverlayControlProvider>
                            {children}
                        </OverlayControlProvider>
                    </MobileMenuProvider>
                </PartySynProvider>
            </GlossaryProvider>
            
        </ThemeProvider>
    )
}