"use client";

import Image from "next/image";
import React from "react";

const Cv: React.FC = () => {
    return (
        <div className="relative">
            <div className="fixed bottom-0 right-0 mr-2 mb-2 sm:mb-24 sm:mr-5 lg:mr-8 transition-all duration-300 hover:-translate-y-1">
                <p id="desktop" className="font-bold">
                    Descargar CV
                </p>

                <div className="py-2 px-4 transition-transform transform hover:-translate-y-1">
                    <a
                        href="/CV Castro Jonathan Desarrollador Full Stack.pdf"
                        download="CV - Castro Jonathan - Full Stack"
                    >
                        <div className="flex items-center justify-center rounded-full bg-gray-800 shadow-black dark:shadow-gray-600 w-16 h-16 hover:bg-gray-700 shadow-lg dark:bg-gray-600">
                            <Image
                                width={40}
                                height={100}
                                alt="Download Document CV"
                                className="object-cover object-center"
                                src="/download.svg"
                                style={{ filter: "invert(1)" }}
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cv;
