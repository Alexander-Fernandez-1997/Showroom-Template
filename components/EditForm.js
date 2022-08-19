import React from "react";
import { useRouter } from "next/router";
import { useForm } from "../hooks/useForm";

export const EditForm = ({ id, name, category, description, image }) => {
  const [values, handleInputChange] = useForm({
    newName: name,
    newCategory: category,
    newDescription: description,
    newImage: image,
    sameId: id,
  });

  const { newName, newCategory, newDescription, newImage } = values;

  const router = useRouter();

  const editClothe = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/clothes/edit/id", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataJson = await response.json();
    console.log(dataJson);
    router.push("/crear");
  };

  return (
    <div>
      <form action="POST" onSubmit={editClothe} className="contact-form row">
        <div className="form-field col-lg-12">
          <input
            id="newName"
            className="input-text js-input "
            type="text"
            required
            autoComplete="off"
            name="newName"
            onChange={handleInputChange}
            value={newName}
            maxLength="12"
            minLength="2"
          />
          <label className="label" htmlFor="newName">
            Nuevo nombre
          </label>
        </div>
        <div className="form-field col-lg-12">
          <select
            id="newCategory"
            className="input-text js-input selected"
            required
            autoComplete="off"
            name="newCategory"
            onChange={handleInputChange}
            value={newCategory}
          >
            <option value="Bikini">Bikini</option>
            <option value="Corpiño">Corpiño</option>
            <option value="Enteriza">Enteriza</option>
            <option value="Tankini">Tankini</option>
            <option value="Bombacha">Bombacha</option>
          </select>
          <label className="label" htmlFor="newCategory">
            Nueva categoria
          </label>
        </div>
        <div className="form-field col-lg-12 ">
          <input
            minLength={50}
            maxLength={100}
            id="newDescription"
            className="input-text js-input "
            type="text"
            required
            autoComplete="off"
            name="newDescription"
            onChange={handleInputChange}
            value={newDescription}
          />
          <label className="label" htmlFor="newDescription">
            Nueva descripcion
          </label>
        </div>

        <div className="form-field col-lg-12">
          <input
            id="newImage"
            className="input-text js-input "
            type="text"
            required
            autoComplete="off"
            name="newImage"
            onChange={handleInputChange}
            value={newImage}
          />
          <label className="label" htmlFor="newImage">
            Url de la imagen nueva
          </label>
        </div>
        <div className="form-field col-lg-12">
          <input className="submit-btn" type="submit" value="Cambiar" />
        </div>
      </form>
    </div>
  );
};
