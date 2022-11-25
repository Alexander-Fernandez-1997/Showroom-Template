import Link from "next/link";
import React from "react";

export const NoDisponible = () => {
  return (
    <div className="pt-5 pb-5 container ">
      <div className="row pt-5 pb-5 justify-content-center">
        <div className="container">
          <h1>Producto no disponible</h1>
          <Link href="/showroom">Regresar al showroom</Link>
        </div>
      </div>
    </div>
  );
};
