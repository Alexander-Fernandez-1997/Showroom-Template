import React from "react";

export const SameAddress = ({ same, setSame }) => {
  return (
    <div className="form-check mt-2">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        onChange={() => setSame(!same)}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Same as as billing address
      </label>
    </div>
  );
};
