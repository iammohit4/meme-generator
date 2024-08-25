import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Meme Generator",
    description: "A basic meme generator",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={manrope.className}>
                <NextTopLoader showSpinner={false} />
                <ThemeProvider>
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
