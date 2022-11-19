import React from "react";

export const LocalDiv = ({ local, index }) => {
  console.log(local);
  const { name, address, image_main, store_hours } = local;
  const activateLocal = (e) => {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
      option.classList.remove("active");
    });
    e.target.classList.add("active");
  };
  return (
    <div
      className={`option ${index === 0 ? "active" : ""}`}
      onClick={activateLocal}
      style={{
        background: `url(${image_main})`,
      }}
    >
      <div className="shadow" />
      <div className="label">
        <div className="info">
          <div className="main">{name}</div>
          <div className="sub">Dir:{address}</div>
          <div className="sub">Horario:{store_hours}</div>
        </div>
      </div>
    </div>
  );
};
