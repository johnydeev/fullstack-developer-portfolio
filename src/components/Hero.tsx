/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import AboutMe from "./AboutMe";
import { useTheme } from "./Context";

const Hero = () => {
    const { theme } = useTheme();

    return (
        <div className="text-gray-600 dark:text-white mt-10 mb-2">
            <section className="body-font text-center px-5 pt-5 pb-4 mt-5">
                <h1 className="text-4xl font-bold sm:px-20 py-2">
                    ¡Hola! Mi nombre es Jonathan
                </h1>
                <h2 className="text-xl pb-8">Bienvenid@ a mi portfolio</h2>

                <div className="container mx-auto flex justify-between sm:px-16 md:px-8 md:flex-row lg:px-4 xl:px-14 flex-col items-start gap-4 max-w-6xl">
                    {/* LEFT SIDE */}
                    <div className="xl:pr-14 lg:flex-grow md:w-2/3 md:text-left md:pr-5 mb-6 md:mb-0 flex flex-col items-center md:items-start text-center">
                        <AboutMe />
                    </div>

                    {/* RIGHT SIDE (PROFILE IMAGE) */}
                    <div className="lg:max-w-[18rem] lg:w-full md:w-[45%] w-[70%] md:mt-6">
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

                {/* SOCIAL ICONS */}
                <div className="container mx-auto flex justify-center md:justify-start sm:px-16 md:px-8 lg:px-4 xl:px-14 mt-2 gap-4 max-w-6xl">
                    <a
                        href="https://github.com/johnydeev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 hover:-translate-y-2 w-14 p-1"
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
                        className="transition-all duration-300 hover:-translate-y-2 w-14 p-1"
                    >
                        <img
                            className="rounded-full"
                            src="/linkedin.svg"
                            alt="LinkedIn"
                        />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Hero;
