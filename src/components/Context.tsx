"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface GlobalContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface ContextProps {
    children: ReactNode;
}

export const Context: React.FC<ContextProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>("light");
    
    useEffect(() => {
        if (typeof window === "undefined") return;

        const stored = localStorage.getItem("theme");

        if (stored === "dark" || stored === "light") {
            setTheme(stored);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, []);
    
    useEffect(() => {
        if (typeof window === "undefined") return;

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <GlobalContext.Provider value={{ theme, setTheme }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useTheme = () => {
    const ctx = useContext(GlobalContext);
    if (!ctx) throw new Error("useTheme debe usarse dentro de <Context>");
    return ctx;
};
