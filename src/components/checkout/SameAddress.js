import React from "react";

export const SameAddress = ({ same, setSame }) => {
  // need to add a function to set the same state to true or false when the checkbox is clicked and then equal the shipping address to the billing address
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
