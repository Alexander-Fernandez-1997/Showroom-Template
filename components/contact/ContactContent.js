import React from "react";
import { ContactDetails } from "./ContactDetails";
import { ContactForm } from "./ContactForm";

export const ContactContent = ({ store }) => {
  return (
    <>
      <section className="bg0 p-t-50 p-b-50">
        <div className="container">
          <div className="flex-w flex-tr">
            <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
              <h4 className="mtext-105 cl2 txt-center p-b-30">
                Envianos un mensaje
              </h4>
              <ContactForm></ContactForm>
            </div>
            <ContactDetails details={store}></ContactDetails>
          </div>
        </div>
      </section>
    </>
  );
};
