import React from "react";
import { Questions } from "./Questions";

export const Faq = ({ notes }) => {
  return (
    <section id="faq" className="faq mb-5">
      <div className="container mb-5" data-aos="fade-up">
        <div className="section-title">
          <h2 className="mtext-111 cl2 p-b-16 mb-3 mt-5">
            Preguntas frecuentes
          </h2>
        </div>
        <ul className="faq-list accordion" data-aos="fade-up">
          {notes.map((note) => (
            <Questions key={note.id} note={note} />
          ))}
        </ul>
      </div>
    </section>
  );
};
