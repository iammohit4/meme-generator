"use client"
import React, { useState } from "react";
import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Spinner } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { LuMonitor, LuMoon, LuSun } from "react-icons/lu";
import { Nabla } from "next/font/google";

const nabla = Nabla({ subsets: ["latin"] });

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    return (
        <Nav onMenuOpenChange={setIsMenuOpen} className="fixed left-0 top-0 bg-opacity-10" >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/" className={`${nabla.className} font-bold text-inherit`}>Meme Generator</Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/about">About</Link>
                </NavbarItem>
                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered">{theme == "dark" ? <LuMoon /> : theme == "light" ? <LuSun /> : theme == "system" ? <LuMonitor /> : <Spinner color="default" className="text-xs scale-50" />}</Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem onClick={() => setTheme("system")} key="system"><p className="flex items-center gap-2"><LuMonitor /> System</p></DropdownItem>
                            <DropdownItem onClick={() => setTheme("light")} key="light"><p className="flex items-center gap-2"><LuSun /> Light</p></DropdownItem>
                            <DropdownItem onClick={() => setTheme("dark")} key="dark"><p className="flex items-center gap-2"><LuMoon /> Dark</p></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                <NavbarItem>
                    <Link color="foreground" href="/">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/about">About</Link>
                </NavbarItem>
                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered">{theme == "dark" ? <LuMoon /> : theme == "light" ? <LuSun /> : theme == "system" ? <LuMonitor /> : <Spinner color="default" className="text-xs scale-50" />}</Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem onClick={() => setTheme("system")} key="system"><p className="flex items-center gap-2"><LuMonitor /> System</p></DropdownItem>
                            <DropdownItem onClick={() => setTheme("light")} key="light"><p className="flex items-center gap-2"><LuSun /> Light</p></DropdownItem>
                            <DropdownItem onClick={() => setTheme("dark")} key="dark"><p className="flex items-center gap-2"><LuMoon /> Dark</p></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarMenu>
        </Nav>
    );
}

export default Navbar