import React from "react";
import Swal from "sweetalert2";

export const ContactForm = () => {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    Array.from(e.currentTarget.elements).forEach((field) => {
      field.value = "";
    });
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        Swal.fire(
          "El mensaje fue enviado exitosamente",
          "Uno de nuestros representantes se comunicare con usted a la brevedad",
          "success"
        );
      }
    } catch (err) {
      Swal.fire(
        "Error al enviar el mensaje",
        "Intente de nuevo o contactenos atraves de nuestras redes sociales o via telefonica",
        "error"
      );
      alert(
        "Error al enviar el mensaje, intente de nuevo o contactenos atraves de nuestras redes sociales o via telefonica."
      );
    }
  }
  return (
    <form onSubmit={handleOnSubmit} className="form-recto">
      <div className="row">
        <div className="col form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="col form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Tu email"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="subject"
          id="subject"
          placeholder="Asunto"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          name="message"
          id="message"
          rows="5"
          placeholder="Mensaje"
          required
        ></textarea>
      </div>
      <button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
        Enviar
      </button>
    </form>
  );
};
