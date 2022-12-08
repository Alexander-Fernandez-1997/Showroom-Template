import React from "react";
import { useSession, signOut } from "next-auth/react";
import { AccountSingIn } from "./AccountSingIn";

export const AccountModal = () => {
  const { data: session } = useSession();

  if (useSession().status === "authenticated" && session !== undefined) {
    return (
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            {session.user.email}
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            <li className="list-group-item">
              <a onClick={signOut}>Cerrar sesión</a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
      >
        <div className="offcanvas-header justify-content-end">
          {/* <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Ingresar a la cuenta
          </h5> */}
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {/* <ul className="list-group">
            <li className="list-group-item">
              <a onClick={signIn}>Iniciar sesión</a>
            </li>
          </ul> */}
          <AccountSingIn></AccountSingIn>
        </div>
      </div>
    );
  }
};
