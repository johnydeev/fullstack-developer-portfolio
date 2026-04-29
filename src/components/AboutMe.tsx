"use client";

import React from "react";

const AboutMe: React.FC = () => {
    return (
        <div className="dark:text-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-gray-800 dark:text-white tracking-tight">
                Full Stack Developer
            </h1>

            <p className="text-sky-500 dark:text-sky-400 font-mono text-sm mb-5 tracking-widest uppercase">
                React · Node.js · TypeScript · Clean Architecture
            </p>

            <div className="mb-6 leading-relaxed space-y-3 text-gray-600 dark:text-gray-300 text-base">
                <p>
                    Desarrollo aplicaciones web end-to-end con más de 2 años de
                    experiencia, gestionando el ciclo completo del proyecto de
                    forma autónoma: desde el relevamiento con el cliente hasta el
                    despliegue en producción.
                </p>
                <p>
                    Me especializo en arquitecturas limpias, APIs RESTful y
                    automatización de procesos aplicando herramientas de IA —
                    logrando reducciones de hasta el{" "}
                    <span className="font-semibold text-gray-800 dark:text-white">
                        50% en tiempos operativos
                    </span>{" "}
                    en entornos reales.
                </p>
                <p>
                    Actualmente construyo{" "}
                    <a
                        href="https://github.com/johnydeev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-500 hover:text-sky-400 underline underline-offset-4 transition-colors duration-200 font-medium"
                    >
                        drive-doc-processor
                    </a>
                    , un sistema SaaS multi-tenant de procesamiento de facturas
                    con OCR e IA. Disponible para roles remotos o en Buenos Aires.
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 border border-green-200 dark:border-green-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Disponible
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                    🌎 Remoto / Buenos Aires
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                    🇦🇷 Argentina
                </span>
            </div>
        </div>
    );
};

export default AboutMe;
