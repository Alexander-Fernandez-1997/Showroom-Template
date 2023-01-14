import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { MegaMenu } from "./MegaMenu";

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
    } else if (direction === "showroom" && asPath.includes("categorias")) {
      return "active-menu";
    } else {
      return null;
    }
  };

  const customDir =
    direction !== "" ? capitalizarPrimeraLetra(direction) : "Inicio";

  if (direction === "showroom") {
    return <MegaMenu activeLink={activeLink}></MegaMenu>;
  } else
    return (
      <li className={activeLink()}>
        <Link href={`/${direction}`}>{customDir}</Link>
      </li>
    );
};
