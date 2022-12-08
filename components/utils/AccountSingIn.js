import React from "react";

export const AccountSingIn = () => {
  return (
    <>
      <div className="p-2">
        <h4 className="mb-4">Iniciar Sesion / Registrarse </h4>
        <form action="#" className="signin-form">
          <div className="form-group mb-3">
            <label className="label text-dark" htmlFor="name">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required=""
            />
          </div>
          <div className="form-group mb-3">
            <label className="label text-dark" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              required=""
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="form-control btn btn-dark rounded submit px-3"
            >
              Iniciar Sesion
            </button>
          </div>
          <div className="form-group d-flex">
            <a className="text-center w-100 text-secondary " href="#">
              Olvide mi contraseña
            </a>
          </div>
          <p className="text-center">
            Sino tienes una cuenta, se creara de manera automatica al rellenar
            el formulario
          </p>
          <hr></hr>

          <div className="form-group d-flex gap-2 flex-column">
            <button className="form-control btn btn-danger rounded submit px-3">
              Iniciar Sesion con Google
            </button>
            <button className="form-control btn btn-primary rounded submit px-3">
              Iniciar Sesion con Facebook
            </button>
            <button className="form-control btn btn-info text-light rounded submit px-3">
              Iniciar Sesion con Twitter
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
