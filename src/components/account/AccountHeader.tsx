import React from "react";

export const AccountHeader = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Hola Ace</h3>
        <p>
          Signed in as:
          <span className="text-dark fw-bold"> Ace User</span>
        </p>
      </div>
      <hr />
    </>
  );
};
