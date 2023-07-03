import React from "react";
import { signIn } from "next-auth/react";
import { useForm } from "../../hooks/useForm";

export const AccountSingIn = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      redirect: false,
      email: formValues.email,
      password: formValues.password,
    });
    console.log("this is a response", response);
    if (response.error) {
      const errorPass = document.querySelector(".errorPass");
      errorPass.classList.remove("d-none");
      setTimeout(() => {
        errorPass.classList.add("d-none");
      }, 3000);
      console.log("Usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      <div className="p-2">
        <h4 className="mb-4">Iniciar Sesion / Registrarse </h4>
        <form onSubmit={handleSubmit} noValidate className="signin-form">
          <div className="form-group mb-3">
            <label className="label text-dark" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required=""
              name="email"
              onChange={handleInputChange}
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
              name="password"
              onChange={handleInputChange}
            />
          </div>
          {/* // Error message goes here in red with bootstrap text-danger*/}
          <p className="text-danger text-center errorPass d-none">
            La contraseña es incorrecta
          </p>
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
            <button
              className="form-control btn btn-danger rounded submit px-3"
              onClick={(e) => {
                signIn("google");
              }}
            >
              Iniciar Sesion con Google
            </button>
            <button
              className="form-control btn btn-primary rounded submit px-3"
              onClick={(e) => {
                signIn("facebook");
              }}
            >
              Iniciar Sesion con Facebook
            </button>
            <button
              className="form-control btn btn-info text-light rounded submit px-3"
              onClick={(e) => {
                signIn("twitter");
              }}
            >
              Iniciar Sesion con Twitter
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
