import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const MobileLink = ({ direction }) => {
  const { asPath } = useRouter();

  function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const activeLink = () => {
    if (asPath === "/" && direction === "") {
      return "active-menu";
    } else if (asPath === `/${direction}`) {
      return "active-menu";
    } else {
      return null;
    }
  };

  const customDir =
    direction !== "" ? capitalizarPrimeraLetra(direction) : "Inicio";

  return (
    <li className={activeLink()}>
      <Link href={`/${direction}`}>{customDir}</Link>
    </li>
  );
};
