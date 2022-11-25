import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { SearchIcon } from "./SearchIcon";

export const AuthBtn = () => {
  const { data: session } = useSession();

  return (
    <ul className="main-menu">
      <SearchIcon />
      {useSession().status === "authenticated" ? (
        <li>
          <p>{session.user.email}</p>
          <a onClick={() => signOut()}>Cerrar Sesión</a>
        </li>
      ) : (
        <li>
          <a onClick={signIn}>Iniciar Sesión</a>
        </li>
      )}
    </ul>
  );
};
