/* eslint-disable @next/next/no-img-element */
import React from "react"
import AboutMe from "./AboutMe"
import Image from "next/image"
import { useTheme } from "./Context"

const Hero = () => {
  const { theme } = useTheme() 
		return (
      <div className="text-gray-600 dark:text-white">
        <section className="body-font text-center p-5 mt-5">
          <h1 className="text-4xl font-bold sm:px-20 py-2">
            ¡Hola! Mi nombre es Jonathan
          </h1>
          <h1 className="text-xl pb-8">Bienvenid@ a mi portfolio</h1>

          <div className="container mx-auto flex justify-between sm:px-16 md:px-8 md:flex-row lg:px-4 xl:px-14 flex-col items-center gap-4 max-w-6xl">
            <div className="xl:pr-14 lg:flex-grow lg:pr-0 md:w-2/3 md:items-start md:text-left md:pr-5 mb-6 md:mb-0 flex flex-col items-center text-center">
              <AboutMe />
              <div className="flex justify-center">
                <picture className="transition-all duration-300 hover:-translate-y-2 w-20 p-2">
                  <a
                    href="https://github.com/johnydeev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="rounded-full w-15 h-15 dark:bg-gray-900 dark:border-slate-400"
                      src={`${
                        theme == "dark"
                          ? "/github-white.svg"
                          : "/github-mark.svg"
                      }`}
                      alt="Github"
                    />
                  </a>
                </picture>
                <picture className="transition-all duration-300 hover:-translate-y-2 w-20">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/johnydeev/"
                  >
                    <img
                      className="rounded-full w-15 h-15"
                      src="/linkedin.svg"
                      alt="LinkedIn"
                    />
                  </a>
                </picture>
              </div>
            </div>
            <div className="lg:max-w-xs lg:w-full md:w-1/2 w-3/4">
              <picture>
                <Image
                  width={900}
                  height={900}
                  className="rounded-full"
                  src="/Jonathan-pic.jpg"
                  alt="Castro-Jonathan"
                  style={{ width: "auto", height: "auto" }}
                  priority
                ></Image>
              </picture>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Hero;
