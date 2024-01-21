import Image from 'next/image'
import React from 'react'

const Stack = () => {
  return (
    <>
      <div id="stack">
        <h2 className="text-3xl font-bold m-2 px-5 pt-24 text-center ">
          Stack Tecnológico
        </h2>
        <section className="p-5 mt-8 bg-gray-200 text-center">
          <div className="container mx-auto">
            <span className="block w-full h-px bg-gray-600 my-8"></span>
            <h2 className="text-2xl font-bold mb-8 text-center">Frontend</h2>
            <div className="flex justify-evenly items-center min-w-full gap-4">
              <div className="flex flex-col items-center">
                <Image width={100} height={100} src="/html5.svg" alt="html5" />
                <span className="mt-2">HTML5</span>
              </div>

              <div className="flex flex-col items-center">
                <Image width={100} height={100} src="/css.svg" alt="CSS" />
                <span className="mt-2">CSS3</span>
              </div>
              <div className="flex flex-col items-center h-15 sm:w-40">
                <Image
                  width={110}
                  height={115}
                  src="/javascript.svg"
                  alt="javascript"
                />
                <span className="mt-2">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <Image width={120} height={100} src="/react.svg" alt="react" />
                <span className="mt-2">React js</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center text-center mx-auto">
              <section className="w-full sm:w-1/2 flex flex-col">
                <span className="block w-full h-px bg-gray-600 my-8"></span>
                <h2 className="text-2xl font-bold mb-8 text-center">Backend</h2>
                <div className="flex flex-wrap:wrap justify-evenly min-w-full gap-4">
                  <div className="flex flex-col items-center">
                    <Image
                      width={100}
                      height={100}
                      src="/nodejs.svg"
                      alt="nodejs"
                    />
                    <span className="mt-2">Node js</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image width={85} height={100} src="/java.svg" alt="java" />
                    <span className="mt-2">JAVA</span>
                  </div>
                  <div className="flex flex-col items-center pt-2">
                    <Image
                      width={100}
                      height={100}
                      src="/spring-svgrepo-com.svg"
                      alt="java"
                    />
                    <span className="mt-3">Spring</span>
                  </div>
                </div>
              </section>

              <section className="w-full sm:w-1/2 flex flex-col">
                <span className="block w-full h-px bg-gray-600 my-8"></span>
                <h2 className="text-2xl font-bold mb-8 text-center">
                  Databases
                </h2>
                <div className="flex justify-evenly items-center min-w-full gap-4">
                  <div className="flex flex-col items-center">
                    <Image
                      width={53}
                      height={100}
                      src="/mongodb.svg"
                      alt="mongodb"
                    />
                    <span className="mt-2">Mongo DB</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      width={115}
                      height={115}
                      src="/mysql.svg"
                      alt="mysql"
                    />
                    <span className="mt-2">MySQL</span>
                  </div>
                </div>
              </section>
            </div>

            <span className="block w-full h-px bg-gray-600 my-8"></span>
            <h2 className="text-2xl font-bold mb-8 text-center">Frameworks</h2>
            <div className="flex flex-wrap:wrap justify-evenly items-center min-w-full gap-4">
              <div className="flex flex-col items-center pt-3">
                <Image
                  className="my-5"
                  width={130}
                  height={50}
                  src="/next.svg"
                  alt="nextjs"
                />
                <span className="mt-5">NEXT js</span>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  width={90}
                  height={100}
                  src="/expressjs.svg"
                  alt="express"
                />
                <span className="mt-2">Express</span>
              </div>

              <div className="flex flex-col items-center pt-3">
                <Image
                  width={110}
                  height={115}
                  src="/tailwindcss.svg"
                  alt="tailwindcss"
                />
                <span className="mt-5">Tailwind CSS</span>
              </div>
            </div>
          </div>
          <span className="block w-full h-px bg-gray-600 my-8"></span>
        </section>
      </div>
    </>
  );
}

export default Stack