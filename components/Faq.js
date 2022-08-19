import React from "react";

export const Faq = () => {
  return (
    <section id="faq" className="faq mb-5">
      <div className="container mb-5" data-aos="fade-up">
        <div className="section-title">
          <h2 className="mtext-111 cl2 p-b-16 mb-3 mt-5">
            Preguntas frecuentes
          </h2>
        </div>
        <ul className="faq-list accordion" data-aos="fade-up">
          <li>
            <a
              data-bs-toggle="collapse"
              className="collapsed"
              data-bs-target="#faq1"
            >
              ¿Cuál es el horario de atención?
              <i className="bx bx-chevron-down icon-show" />
              <i className="bx bx-x icon-close" />
            </a>
            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
              <p>
                Terrero: Horario Verano (1/12 - 15/2): Lunes a Sabádos de 9:00 a
                20:00 <br />
                Horario Invierno (16/2 - 1/12): Lunes a Viernes de 9:00 a 18:00
                - Sabádos 9:00 a 15:00 <br />
                Av Santa Fe: Lunes a Sabádos de 10:00 a 20:00
              </p>
            </div>
          </li>
          <li>
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
              className="collapsed"
            >
              ¿Se puede hacer compras al por mayor?
              <i className="bx bx-chevron-down icon-show" />
              <i className="bx bx-x icon-close" />
            </a>
            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
              <p>Si, contamos con compras al por menor y al por mayor.</p>
            </div>
          </li>
          <li>
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
              className="collapsed"
            >
              ¿Cualés son los medios de contacto para poder hacer una compra?
              <i className="bx bx-chevron-down icon-show" />
              <i className="bx bx-x icon-close" />
            </a>
            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
              <p>
                Puede contactarnos a través de llamado telefonico o por
                whatsapp. Tambien puede enviarnos un mensaje en el formulario de
                contacto o acercarse al local.
              </p>
            </div>
          </li>
          <li>
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq4"
              className="collapsed"
            >
              ¿Cuanto tardan en resolver una consulta?
              <i className="bx bx-chevron-down icon-show" />
              <i className="bx bx-x icon-close" />
            </a>
            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
              <p>
                Por whatsapp o mail 24hs, llamado telefonico o encuentro
                presencial servicio en el acto.
              </p>
            </div>
          </li>
          <li>
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq5"
              className="collapsed"
            >
              ¿Cuál es el lapso de devolucion?
              <i className="bx bx-chevron-down icon-show" />
              <i className="bx bx-x icon-close" />
            </a>
            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
              <p>
                Se hacen cambios de productos dentro de los 15 dias de recibir
                el producto. El mismo debe poseer la etiqueta y deberan
                presentar el ticket de compra.
              </p>
            </div>
          </li>
          <li>
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq6"
              className="collapsed"
            >
              ¿Poseen sistema de envio?
              <i className="bx bx-chevron-down icon-show" />
              <i className="bx bx-x icon-close" />
            </a>
            <div id="faq6" className="collapse" data-bs-parent=".faq-list">
              <p>
                No contamos con servicio a domicilio propio pero para compras al
                por mayor se coordina el metodo de envio.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
