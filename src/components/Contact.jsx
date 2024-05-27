import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Loading from "./Loading";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "name") {
      setErrors({
        ...errors,
        name: value.trim() === "" ? "El nombre es requerido." : "",
      });
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        email: emailRegex.test(value)
          ? ""
          : "El correo electrónico no es válido.",
      });
    }
  };

  const handleSubmit = async () => {
    console.log("formDataEnSubmit>>", formData);
    const isFormEmpty =
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim();

    if (isFormEmpty) {
      Swal.fire({
        title: "Error!",
        text: "Por favor, complete todos los campos del formulario.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    if (errors.name || errors.email) {
      Swal.fire({
        title: "Error!",
        text: "Por favor, corrige los errores en el formulario.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    setLoading(true);
    try {
      
      const resSendMail = await handleSendEmails();
      const resSaveData = await handleSaveData();      

      console.log("resSendMail>>>",resSendMail)
      console.log("resSaveData>>>",resSaveData)
      console.log("reSendMail Status>>>",resSendMail.status)
      console.log("resSaveData Status>>>",resSaveData.status)

      if (resSendMail.status === 200) {
        console.log("Se envio Mail...")
        if(resSaveData.status === 202){
          console.log("Se guardo el usuario...")
          Swal.fire({
            title: "Me alegra que hayas vuelto!",
            text: resSaveData.data.message,
            icon: "success",
            confirmButtonText: "OK",
          });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        } else{
          Swal.fire({
          title: "Gracias por contactarte!",
          text: "En breve estaré respondiendo tu email.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        }
      }    
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Hubo un problema al enviar el correo.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveData = async () => {
    try {
      const response = await axios.post(`/api/users`, formData);
      console.log("Response save data>>", response);
      return response;
    } catch (error) {
      console.log("Error save data.", error);
      if (error.response) {
        console.log("Error response data:", error.response.data);
        console.log("Error response status:", error.response.status);
        console.log("Error response headers:", error.response.headers);
      } else if (error.request) {
        console.log("Error request:", error.request);
      } else {
        console.log("Error message:", error.message);
      }
      throw error;
    }
  };

  const handleSendEmails = async () => {
    try {
      const response = await axios.post(`/api/sendmail`, formData);
      console.log("Response send email>>>:", response);
      return response;
    } catch (error) {
      console.error("Error sending email>>>:", error);
      throw error;
    }
  };

  return (
    <>
      <div id="contacto">
        <Loading loading={loading} />
        <section className="text-gray-600 dark:text-white body-font relative ">
          <div className="container px-5 py-16 my-4 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">
                Contáctame!
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm">
                      Nombre
                    </label>
                    <input
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full rounded border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } focus:border-blue-500 bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm">
                      Email
                    </label>
                    <input
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full rounded border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:border-blue-500 bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm">
                      Mensaje
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={handleChange}
                      id="message"
                      name="message"
                      className="w-full rounded border border-gray-300 focus:border-blue-500 bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="flex mx-auto text-white bg-gray-800 dark:bg-gray-600 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 dark:hover:bg-gray-500 rounded text-lg"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
