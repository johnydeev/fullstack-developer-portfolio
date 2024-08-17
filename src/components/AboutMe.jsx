import React from "react"

const AboutMe = () => {
  return (
    <>
    <div className="dark:text-white">
        <h1 id="gradient"  className="sm:text-4xlmb-4 text-gray-600 dark:text-slate-400 mb-3">
          Full Stack Developer
        </h1>
        <div className="mb-6 leading-relaxed">
          <p>
            Ademas de gustarme la programación, soy diseñador de calzado y tuve mi
            propio negocio alimenticio el cual me dio estabilidad economica. En
            esta instancia de mi vida voy por todo y es por eso que vendí mi
            negocio para trabajar en lo que me apasiona.
          </p>
          <p>
            Me gradue en el 2023 como <i>Professional Developer</i> en Digital
            House y participe de un proyecto del cual me llevo muchisima
            experiencia en habilidades blandas y tecnicas, podes verlo{" "}
            <a
              href="https://infinit-ecommerce.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                <i className=" text-sky-500">aquí.</i>
              </strong>
            </a>{" "}
            Trabajo día a día para ser un mejor profesional y espero algun dia ser
            ejemplo o referente en este mundo tan basto de la programación.
          </p>
        </div>
    </div>
    </>
  );
};

export default AboutMe