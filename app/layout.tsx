import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import GlossaryShortcut from "@/components/layout/glossary/glossaryShortcut/glossaryShortcut";
import { Providers } from "./providers";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Elsword Char Breakdown",
  description: "Your source for Elsword character information.",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.className} ${" "} scroll-smooth scroll-p-12`} suppressHydrationWarning>
      <body className="bg-background text-foreground">

        <Providers>
        
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-4 items-center bg-neutral-800">

              <Header />

              <div className="flex-auto pb-5 mb-12 ml-0 md:ml-32">
                {children}
              </div>

              <GlossaryShortcut />
              <Footer />
              
            </div>
          </main>

        </Providers>
      </body>
    </html>
  );
}
