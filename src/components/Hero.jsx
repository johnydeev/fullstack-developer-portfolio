/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Hero = () => {
    return (
        <div>
            <section className="text-gray-600 body-font text-center p-5">
            <h1 className="text-4xl font-bold sm:px-20 py-2">
                ¡Hola! Mi nombre es Jonathan
            </h1>
            <h1 className="text-xl pb-8">Bienvenid@ a mi portfolio</h1>

            <div className=" 2xl:px-36 container mx-auto flex sm:px-16 md:px-2 lg:px-20 md:flex-row flex-col items-center gap-4">
                <div className=" 2xl:mr-52 lg:flex-grow md:w-2/3 lg:pr-10 md:pr-10 flex flex-col md:items-start md:text-left mb-6 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-600">
                    Full Stack Developer...
                    <br className="hidden lg:inline-block" />
                </h1>
                <p className="mb-6 leading-relaxed">
                    Me considero un amante de la tecnologia e innovacion... siento
                    que tengo mucho para dar en el campo IT gracias a mi creatividad
                    y dedicacion. Espero algun dia ser ejemplo o referente en este
                    mundo tan basto de la programacion.
                </p>
                <div className="flex justify-center">
                    <picture className="w-20 p-2">
                    <a href="https://github.com/johnydeev">
                        <img
                        className="rounded-full w-15 h-15"
                        src="/github-mark.svg"
                        alt="Github"
                        />
                    </a>
                    </picture>
                    <picture className="w-20">
                    <a href="https://www.linkedin.com/in/johnydeev/">
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
                    <img
                    className="rounded-full"
                    src="/Jonathan-pic.jpg"
                    alt="Castro-Jonathan"
                    />
                </picture>
                </div>
            </div>
            </section>
        </div>
    );
}

export default Hero