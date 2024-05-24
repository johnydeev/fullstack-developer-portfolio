"use client"
import React, { createContext, useContext, useState } from "react"

const GlobalContext = createContext()

export const Context = ({ children }) => {
    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    };

    return (
        <GlobalContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </GlobalContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(GlobalContext)
};
