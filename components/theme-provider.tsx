import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NextUIProvider>
                <NextThemesProvider attribute="class" defaultTheme="system">
                    {children}
                </NextThemesProvider>
            </NextUIProvider>
        </div>
    )
}

export default ThemeProvider