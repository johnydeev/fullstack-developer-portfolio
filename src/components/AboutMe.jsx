import React from "react";

const AboutMe = () => {
    return (
      <>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-600">
          Full Stack Developer
        </h1>
        <div className="mb-6 leading-relaxed">
          <p>
            Ademas de gustarme la programación, soy diseñador de calzado y tuve
            mi propio negocio alimenticio el cual me dio estabilidad economica.
            En esta instancia de mi vida voy por todo y es por eso que vendí mi negocio
            para trabajar en lo que me apasiona.
          </p>
          <p>
            Me gradue en el 2023 como <i>Professional Developer</i> y participe de un proyecto del cual me llevo muchisima experiencia en habilidades blandas y tecnicas, podes verlo{" "}
            <a
              href="https://infinit-ecommerce.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong><i className=" text-blue-600">aqui.</i></strong>
            </a>{" "}
            Trabajo día a día para ser un mejor profesional y
            espero algun dia ser ejemplo o referente en este mundo tan basto de
            la programación.
          </p>
        </div>
      </>
    );
};

export default AboutMe;
