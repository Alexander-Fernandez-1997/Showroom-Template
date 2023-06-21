import React from "react";

export const ContactDetails = ({ details }) => {
  const { email, wp_number, street_number, street, province, city, country } =
    details;
  const address =
    `${street} ${street_number}, ${city}, ${province}, ${country}` || "";
  return (
    <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
      <div className="flex-w w-full p-b-42">
        <span className="fs-18 cl5 txt-center size-211">
          <span className="lnr lnr-map-marker" />
        </span>
        <div className="size-212 p-t-2">
          <span className="mtext-110 cl2">Direccion</span>
          <p className="stext-115 cl6 size-213 p-t-18">{address}</p>
        </div>
      </div>
      <div className="flex-w w-full p-b-42">
        <span className="fs-18 cl5 txt-center size-211">
          <span className="lnr lnr-phone-handset" />
        </span>
        <div className="size-212 p-t-2">
          <span className="mtext-110 cl2">Llamanos</span>
          <p className="stext-115 cl1 size-213 p-t-18">{wp_number}</p>
        </div>
      </div>
      <div className="flex-w w-full">
        <span className="fs-18 cl5 txt-center size-211">
          <span className="lnr lnr-envelope" />
        </span>
        <div className="size-212 p-t-2">
          <span className="mtext-110 cl2">Soporte de ventas</span>
          <p className="stext-115 cl1 size-213 p-t-18">{email}</p>
        </div>
      </div>
    </div>
  );
};
