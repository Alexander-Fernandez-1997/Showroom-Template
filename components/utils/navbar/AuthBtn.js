import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { SearchIcon } from "./SearchIcon";
import { FiUser } from "react-icons/fi";
import { CartIcon } from "./CartIcon";

export const AuthBtn = () => {
  const { data: session } = useSession();
  console.log(session);
  const sign = useSession().status === "authenticated" ? signOut : signIn;

  return (
    <ul className="main-menu">
      <li>
        <a>
          <SearchIcon />
        </a>
      </li>
      <li>
        <a>
          <FiUser size={"1.2rem"} onClick={sign} />
          {/* <span className="user-badge">
            {useSession().status === "authenticated"
              ? session.user.email
              : null}
          </span> */}
        </a>
      </li>
      <CartIcon />
    </ul>
  );
};
