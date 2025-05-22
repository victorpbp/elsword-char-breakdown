'use client';

import { GlossaryProvider } from "@/contexts/glossary/glossaryContext";
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
                {children}
            </GlossaryProvider>
        </ThemeProvider>
    )
}