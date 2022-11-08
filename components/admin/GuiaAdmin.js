import React from "react";

export const GuiaAdmin = () => {
  const showInformacion = () => {
    const info = document.getElementById("informacion");
    if (info.style.display === "none") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
  };

  return (
    <div className="guia text-dark pb-3 mt-5">
      <div className="container">
        <h1>
          Guia del Admin{" "}
          <button className="btn btn-info" onClick={showInformacion}>
            Leer
          </button>
        </h1>
        <hr className="mb-2 bg-info"></hr>
        <br />
        <div id="informacion" style={{ display: "none" }}>
          <h3>Agregar una prenda:</h3>
          <hr className="bg-info" />

          <p>
            Para agregar una prenda, debes ingresar los datos en el formulario ,
            luego presionar el boton Crear. <br />
            El formulario esta en la parte de arriba, contiene los datos :
          </p>
          <ul>
            <li>Nombre: Nombre de la prenda</li>
            <li>
              Categoria: Categoria de la prenda, puede ser una de las
              siguientes: <br />
              bikini , corpiño, bombacha , enteriza o tankini
            </li>
            <li>
              Descripcion: La Descripcion de la prenda, puede ser corta o larga
              , solo aparecera en el modal para darle un poco mas de detalle al
              cliente.
            </li>
            <li>
              Url de la imagen: La url de la imagen de la prenda, debe ser un
              link de una imagen de google drive o una imagen de la web. <br />
              Recomiendo usar Imgur para subirlas y luego utilizarlas: <br />
              <a target="_blank" rel="noreferrer" href="https://imgur.com/">
                https://imgur.com/
              </a>
            </li>
          </ul>
          <br />
          <h3>Editar una prenda:</h3>
          <hr className="bg-info" />
          <p>
            Para editar una prenda, primero debes seleccionar la prenda que
            deseas y hacer click en el boton que aparecera en la parte inferior
            media del mismo y luego debes seleccionar la opcion editar. Deberas
            ingresar los datos nuevos en el formulario y es importante que
            ninguno quede en blanco. <br />
            Luego envialos y listo , se habran modificado en la base de datos.
          </p>
          <br />

          <h3>Eliminar una prenda:</h3>
          <hr className="bg-info" />
          <p>
            Para eliminar una prenda, primero debes seleccionar la prenda que
            desees eliminar y luego daras click en el boton rojo que aparecera
            en la parte inferior derecha.
          </p>
        </div>
      </div>
    </div>
  );
};
