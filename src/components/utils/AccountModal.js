"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { AccountSingIn } from "./AccountSingIn";
import { getAccountLinks } from "utils/account";
import Link from "next/link";

export const AccountModal = () => {
  const { data: session } = useSession();
  const links = getAccountLinks(session?.user?.id);

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
            Opciones de cuenta
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="p-2">
            {/* <h5 className="mb-4">Bienvenido {session.user?.email} </h5> */}
            <div className="d-flex flex-column  gap-5">
              {links.map((link) => (
                <button
                  className="btn border-bottom border-bottom-secondary "
                  key={link.href}
                >
                  <Link className="text-dark" href={link.href}>
                    {link.tittle}
                  </Link>
                </button>
              ))}

              <button
                className="btn border-bottom border-bottom-secondary "
                role="button"
                onClick={() => signOut()}
              >
                Cerrar sesión
              </button>
            </div>
          </div>
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
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <AccountSingIn></AccountSingIn>
        </div>
      </div>
    );
  }
};
