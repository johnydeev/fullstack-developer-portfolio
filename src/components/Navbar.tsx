/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTheme } from "./Context";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const { theme, setTheme } = useTheme(); // ya no tira error

    const isClient = typeof window !== "undefined";

    // Scroll listener
    useEffect(() => {
        if (!isClient) return;

        const handleScroll = () => setIsScrolled(window.scrollY > 0);

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isClient]);

    // Cargar tema desde localStorage
    useEffect(() => {
        if (!isClient) return;

        let storedTheme: string | null = null;

        try {
            storedTheme = localStorage.getItem("theme");
        } catch {}

        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, [isClient, setTheme]);

    // Aplicar clase al <html>
    useEffect(() => {
        if (!isClient || !theme) return;

        const html = document.documentElement;

        try {
            localStorage.setItem("theme", theme);
        } catch {}

        if (theme === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [theme, isClient]);

    // Toggle
    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 px-4 transition-all duration-300 
                ${
                    isScrolled
                        ? "bg-gray-800/90 dark:bg-gray-600/90 shadow-md backdrop-blur"
                        : "bg-transparent"
                }
                text-gray-200 dark:text-white`}
        >
            <div className="container mx-auto flex justify-between items-center p-4">
                <span className="text-xl font-bold">Castro Jonathan</span>

                <div
                    className={`link ${
                        isOpen ? "open" : "close"
                    } flex gap-10 items-center`}
                >
                    <Link onClick={() => setIsOpen(false)} href="#inicio">
                        Inicio
                    </Link>
                    <Link onClick={() => setIsOpen(false)} href="#stack">
                        Stack
                    </Link>
                    <Link onClick={() => setIsOpen(false)} href="#proyectos">
                        Proyectos
                    </Link>
                    <Link onClick={() => setIsOpen(false)} href="#contacto">
                        Contacto
                    </Link>
                </div>

                <div
                    className={`hamburg ${isOpen ? "open h-[35px]" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <button
                    onClick={toggleTheme}
                    className={`p-3 rounded-full mr-4 transition-all 
                        ${theme === "dark" ? "bg-white" : "bg-gray-600"}`}
                >
                    <img
                        width={30}
                        height={30}
                        src={
                            theme === "dark"
                                ? "/sun-black.svg"
                                : "/moon-white2.svg"
                        }
                        alt="theme icon"
                    />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
