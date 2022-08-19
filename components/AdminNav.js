import Link from "next/link";
import React from "react";

export const AdminNav = () => {
  const showBar = () => {
    let x = document.getElementById("navbarNavAltMarkup");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  return (
    <>
      <nav className=" navbar-expand-lg navbar navbar-dark bg-info sticky-top">
        <div className="container-fluid">
          <Link href="/crear">
            <a className="navbar-brand">Zona Administrativa</a>
          </Link>

          <button
            onClick={showBar}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link href="/">
                <a className="nav-link active" aria-current="page">
                  Tienda
                </a>
              </Link>
              <Link href="#get-in-touch">
                <a className="nav-link">Crear</a>
              </Link>
              <Link href="#inicioGrid">
                <a className="nav-link">Editar</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
