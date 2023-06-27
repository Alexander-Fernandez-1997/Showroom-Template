"use client";
import Link from "next/link";
import React from "react";

import { MegaMenu } from "./MegaMenu";
import { usePathname } from "next/navigation";

export const MobileLink = ({ direction }) => {
  const pathname = usePathname();

  function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const activeLink = () => {
    if (pathname === "/" && direction === "") {
      return "active-menu";
    } else if (pathname === `/${direction}`) {
      return "active-menu";
    } else if (direction === "showroom" && pathname.includes("categorias")) {
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
