import Image from 'next/image'
import React from 'react'

const Proyects = () => {
    return (
      <div id="proyectos">
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="border-2">
                  <picture>
                    <Image
                      width={600}
                      height={100}
                      alt="Project INFINIT-Ecommerce image"
                      className="object-cover object-center "
                      src="/infinit.jpeg"
                    />
                  </picture>
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  INFINIT
                </h2>
                <p className="leading-relaxed text-base">
                  Se trata de un booking de autos online donde se puede alquilar
                  un automovil segun las necesidades y ubicacion del usuario
                </p>
                <div className="flex justify-center">
                  <picture className="w-20 p-2">
                    <img
                      className="rounded-full w-15 h-15"
                      src="/github-mark.svg"
                      alt="Github"
                    />
                  </picture>
                </div>
              </div>
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="border-2">
                  <picture>
                    <Image
                      width={600}
                      height={100}
                      alt="Project Dentist Card image"
                      className="object-cover object-center min-h-fit"
                      src="/dentist2.jpeg"
                    />
                  </picture>
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  Dentistas
                </h2>
                <p className="leading-relaxed text-base">
                  App que consume una API con la informacion de 10 dentistas los
                  cuales se renderizan en Cards con un estilo personalizado y adaptativo
                </p>
                <div className="flex justify-center">
                  <picture className="w-20 p-2">
                    <img
                      className="rounded-full w-15 h-15"
                      src="/github-mark.svg"
                      alt="Github"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Proyects