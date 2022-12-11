import React from "react";

export const AdressFields = () => {
  return (
    <>
      <div className="col-12">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
        ></input>
      </div>
      <div className="col-12 col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
        ></input>
      </div>
      <div className="col-12 col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Apellido"
        ></input>
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          placeholder="Compañia (opcional)"
        ></input>
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          placeholder="Dirección"
        ></input>
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          placeholder="Apartamento, suite, etc. (opcional)"
        ></input>
      </div>
      <div className="col-12 col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Código postal"
        ></input>
      </div>
      <div className="col-12 col-md-8">
        <input
          type="text"
          className="form-control"
          placeholder="Ciudad"
        ></input>
      </div>
      <div className="col-12">
        <input type="text" className="form-control" placeholder="País"></input>
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          placeholder="Estado / Provincia"
        ></input>
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          placeholder="Teléfono"
        ></input>
      </div>
    </>
  );
};
