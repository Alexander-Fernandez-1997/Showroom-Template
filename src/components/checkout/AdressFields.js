import React from "react";

export const AdressFields = ({ handleInputChange }) => {
  return (
    <>
      <div className="col-12">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="col-12 col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          name="name"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="col-12 col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Apellido"
          name="lastname"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          placeholder="Compañia (opcional)"
          name="company"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          placeholder="Dirección"
          name="address"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          placeholder="Apartamento, suite, etc. (opcional)"
          name="apartment"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="col-12 col-md-4">
        <input
          type="text"
          className="form-control cp-provider"
          placeholder="Código postal"
          name="cp"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="col-12 col-md-8">
        <input
          type="text"
          className="form-control"
          placeholder="Ciudad"
          name="city"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          placeholder="País"
          name="country"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          placeholder="Estado / Provincia"
          name="state"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          placeholder="Teléfono"
          name="phone"
          onChange={handleInputChange}
        ></input>
      </div>
    </>
  );
};
