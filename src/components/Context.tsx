"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface GlobalContextType {
    theme: string | null;
    setTheme: React.Dispatch<React.SetStateAction<string | null>>;
}

// Crear el contexto con tipo explícito
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface ContextProps {
    children: ReactNode;
}
export const Context: React.FC<ContextProps> = ({ children }) => {

    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const stored = localStorage.getItem("theme");
        if (stored) {
            setTheme(stored);
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, []);

    return (
        <GlobalContext.Provider value={{ theme, setTheme }}>
        {children}
        </GlobalContext.Provider>
    );
};

export const useTheme = () => {
    const ctx = useContext(GlobalContext);
    if (!ctx) {
        throw new Error("useTheme debe usarse dentro de <Context>");
    }
    return ctx;
};

