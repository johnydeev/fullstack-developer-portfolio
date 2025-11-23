"use client"
import React, { createContext, useContext, useState, useEffect } from "react"
const GlobalContext = createContext()

export const Context = ({ children }) => {
    const [theme, setTheme] = useState(null)

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
    return useContext(GlobalContext)
};
