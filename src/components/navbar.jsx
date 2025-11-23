"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTheme } from "./Context";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();

    // Verificación segura de cliente
    const isClient = typeof window !== "undefined";

    // Scroll listener
    useEffect(() => {
        if (!isClient) return;

        const handleScroll = () => setIsScrolled(window.scrollY > 0);

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isClient]);

    // Tema inicial
    useEffect(() => {
        if (!isClient) return;

        let storedTheme = null;
        try {
            storedTheme = localStorage.getItem("theme");
        } catch (_) {}

        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, [isClient, setTheme]);

    // Aplicar tema a <html>
    useEffect(() => {
        if (!isClient || !theme) return;

        const html = document.documentElement;

        try {
            localStorage.setItem("theme", theme);
        } catch (_) {}

        // FIX: aplicar clase sin re-render ni microcorte visual
        if (theme === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [theme, isClient]);

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
                    <Link
                        onClick={() => setIsOpen(false)}
                        href="#inicio"
                        className="underline hover:underline-offset-2"
                    >
                        Inicio
                    </Link>
                    <Link
                        onClick={() => setIsOpen(false)}
                        href="#stack"
                        className="underline hover:underline-offset-2"
                    >
                        Stack
                    </Link>
                    <Link
                        onClick={() => setIsOpen(false)}
                        href="#proyectos"
                        className="underline hover:underline-offset-2"
                    >
                        Proyectos
                    </Link>
                    <Link
                        onClick={() => setIsOpen(false)}
                        href="#contacto"
                        className="underline hover:underline-offset-2"
                    >
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
