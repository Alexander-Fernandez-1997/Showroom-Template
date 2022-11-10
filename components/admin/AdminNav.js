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

  return <>
    <nav className=" navbar-expand-lg navbar navbar-dark bg-info sticky-top">
      <div className="container-fluid">
        <Link href="/admin" className="navbar-brand">
          Zona Administrativa
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
            <Link href="/" className="nav-link active" aria-current="page">
              
                Tienda
              
            </Link>
            <Link href="#get-in-touch" className="nav-link">
              Crear
            </Link>
            <Link href="#inicioGrid" className="nav-link">
              Editar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </>;
};
