/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import AboutMe from "./AboutMe";
import { useTheme } from "./Context";

const Hero = () => {
    const { theme } = useTheme();

    return (
        <div className="text-gray-600 dark:text-white">
            <section className="body-font text-center p-5 mt-5">
                <h1 className="text-4xl font-bold sm:px-20 py-2">
                    ¡Hola! Mi nombre es Jonathan
                </h1>
                <h2 className="text-xl pb-8">Bienvenid@ a mi portfolio</h2>

                <div className="container mx-auto flex justify-between sm:px-16 md:px-8 md:flex-row lg:px-4 xl:px-14 flex-col items-center gap-4 max-w-6xl">
                    {/* LEFT SIDE */}
                    <div className="xl:pr-14 lg:flex-grow md:w-2/3 md:text-left md:pr-5 mb-6 md:mb-0 flex flex-col items-center md:items-start text-center">
                        <AboutMe />

                        {/* SOCIAL ICONS */}
                        <div className="flex justify-center md:justify-start mt-4 gap-4">
                            <a
                                href="https://github.com/johnydeev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-300 hover:-translate-y-2 w-20 p-2"
                            >
                                <img
                                    className="rounded-full dark:bg-gray-900 dark:border-slate-400"
                                    src={
                                        theme === "dark"
                                            ? "/github-white.svg"
                                            : "/github-mark.svg"
                                    }
                                    alt="Github"
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/johnydeev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-300 hover:-translate-y-2 w-20 p-2"
                            >
                                <img
                                    className="rounded-full"
                                    src="/linkedin.svg"
                                    alt="LinkedIn"
                                />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE (PROFILE IMAGE) */}
                    <div className="lg:max-w-xs lg:w-full md:w-1/2 w-3/4">
                        <Image
                            width={900}
                            height={900}
                            className="rounded-full"
                            src="/Jonathan-pic.jpg"
                            alt="Castro Jonathan"
                            priority
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
