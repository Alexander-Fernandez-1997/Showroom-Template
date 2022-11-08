import React from "react";
import Swal from "sweetalert2";

export const ContactContent = () => {
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
    <>
      <section className="bg0 p-t-50 p-b-50">
        <div className="container">
          <div className="flex-w flex-tr">
            <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
              <h4 className="mtext-105 cl2 txt-center p-b-30">
                Envianos un mensaje
              </h4>
              <form onSubmit={handleOnSubmit}>
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
            </div>
            <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
              <div className="flex-w w-full p-b-42">
                <span className="fs-18 cl5 txt-center size-211">
                  <span className="lnr lnr-map-marker" />
                </span>
                <div className="size-212 p-t-2">
                  <span className="mtext-110 cl2">Direccion</span>
                  <p className="stext-115 cl6 size-213 p-t-18">
                    Terrero 1777, C1416BMN CABA, Buenos Aires, Argentina
                  </p>
                </div>
              </div>
              <div className="flex-w w-full p-b-42">
                <span className="fs-18 cl5 txt-center size-211">
                  <span className="lnr lnr-phone-handset" />
                </span>
                <div className="size-212 p-t-2">
                  <span className="mtext-110 cl2">Llamanos</span>
                  <p className="stext-115 cl1 size-213 p-t-18">1557510886</p>
                </div>
              </div>
              <div className="flex-w w-full">
                <span className="fs-18 cl5 txt-center size-211">
                  <span className="lnr lnr-envelope" />
                </span>
                <div className="size-212 p-t-2">
                  <span className="mtext-110 cl2">Soporte de ventas</span>
                  <p className="stext-115 cl1 size-213 p-t-18">
                    Bahiadelsol_1777@yahoo.com.ar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
