"use client";

import { Command } from "cmdk";
import React, { useEffect, useState } from "react";
import { useTheme } from "./Context";

const CommandPalette: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((prev) => !prev);
            }
            if (e.key === "Escape") {
                setOpen(false);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const goTo = (hash: string) => {
        setOpen(false);
        window.location.hash = hash;
    };

    const openLink = (url: string) => {
        setOpen(false);
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="hidden sm:flex fixed bottom-0 left-0 mb-2 ml-2 sm:mb-24 sm:ml-5 lg:ml-8 z-40 items-center gap-2 px-3 py-2.5 rounded-full bg-gray-800 dark:bg-gray-600 shadow-lg text-gray-200 text-sm hover:bg-gray-700 dark:hover:bg-gray-500 transition-all hover:-translate-y-1"
            >
                Buscar
                <kbd className="font-mono text-xs bg-gray-700 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                    ⌘K
                </kbd>
            </button>
            <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Buscador de comandos"
            className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32 px-4"
        >
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setOpen(false)}
            />
            <div className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden">
                <Command.Input
                    autoFocus
                    placeholder="Buscar sección, proyecto o acción..."
                    className="w-full px-5 py-4 bg-transparent text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none border-b border-gray-200 dark:border-gray-700 font-mono text-sm"
                />
                <Command.List className="max-h-80 overflow-y-auto p-2">
                    <Command.Empty className="px-4 py-6 text-sm text-gray-500 dark:text-gray-400 text-center">
                        Sin resultados.
                    </Command.Empty>

                    <Command.Group heading="Navegación" className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 px-3 pt-2 pb-1">
                        <Command.Item
                            onSelect={() => goTo("inicio")}
                            className="px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 cursor-pointer aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800"
                        >
                            Ir a Inicio
                        </Command.Item>
                        <Command.Item
                            onSelect={() => goTo("stack")}
                            className="px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 cursor-pointer aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800"
                        >
                            Ir a Stack Tecnológico
                        </Command.Item>
                        <Command.Item
                            onSelect={() => goTo("proyectos")}
                            className="px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 cursor-pointer aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800"
                        >
                            Ir a Proyectos
                        </Command.Item>
                        <Command.Item
                            onSelect={() => goTo("contacto")}
                            className="px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 cursor-pointer aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800"
                        >
                            Ir a Contacto
                        </Command.Item>
                    </Command.Group>

                    <Command.Group heading="Proyectos" className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 px-3 pt-3 pb-1">
                        <Command.Item
                            onSelect={() => openLink("https://github.com/johnydeev/ia-drive-doc-processor")}
                            className="px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 cursor-pointer aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800"
                        >
                            ia-drive-doc-processor (GitHub)
                        </Command.Item>
                        <Command.Item
                            onSelect={() => openLink("https://task-drive-manager.vercel.app")}
                            className="px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 cursor-pointer aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800"
                        >
                            task-drive-manager (Demo)
                        </Command.Item>
                    </Command.Group>

                    <Command.Group heading="Acciones" className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 px-3 pt-3 pb-1">
                        <Command.Item
                            onSelect={() => {
                                setOpen(false);
                                const link = document.createElement("a");
                                link.href = "/CV Castro Jonathan Desarrollador Full Stack.pdf";
                                link.download = "CV - Castro Jonathan - Full Stack";
                                link.click();
                            }}
                            className="px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 cursor-pointer aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800"
                        >
                            Descargar CV
                        </Command.Item>
                        <Command.Item
                            onSelect={() => {
                                setTheme(theme === "dark" ? "light" : "dark");
                                setOpen(false);
                            }}
                            className="px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 cursor-pointer aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800"
                        >
                            Cambiar tema (claro/oscuro)
                        </Command.Item>
                        <Command.Item
                            onSelect={() => openLink("https://github.com/johnydeev")}
                            className="px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 cursor-pointer aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800"
                        >
                            Abrir GitHub
                        </Command.Item>
                        <Command.Item
                            onSelect={() => openLink("https://www.linkedin.com/in/johnydeev/")}
                            className="px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 cursor-pointer aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800"
                        >
                            Abrir LinkedIn
                        </Command.Item>
                    </Command.Group>
                </Command.List>
                <div className="px-4 py-2.5 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3 text-xs text-gray-400 dark:text-gray-500 font-mono">
                    <span>↑↓ navegar</span>
                    <span>↵ seleccionar</span>
                    <span>esc cerrar</span>
                </div>
            </div>
            </Command.Dialog>
        </>
    );
};

export default CommandPalette;
