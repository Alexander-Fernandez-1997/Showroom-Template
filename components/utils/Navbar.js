import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { SearchBar } from "./SearchBar";

export const Navbar = ({ query, setQuery }) => {
  const { asPath } = useRouter();

  const { data: session } = useSession();

  const showSearch = () => {
    document.querySelector(".bigsearch").classList.add("show-modal-search");
  };

  const mobileMenu = () => {
    document.querySelector(".hamburger--squeeze").classList.toggle("is-active");
    const menu = document.querySelector(".mobile-transform");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  };

  return (
    <>
      <header>
        {/* Header desktop */}
        <div className="container-menu-desktop fix-menu-desktop ">
          <div className="wrap-menu-desktop">
            <nav className="limiter-menu-desktop container">
              {/* Logo desktop */}
              <Link href="/" className="logo">
                <img src="https://i.imgur.com/GFS3QSN.png" alt="IMG-LOGO" />
              </Link>
              {/* Menu desktop */}
              <div className="menu-desktop">
                <ul className="main-menu">
                  <li className={asPath === "/" ? "active-menu" : null}>
                    <Link href="/">Inicio</Link>
                  </li>
                  <li className={asPath === "/showroom" ? "active-menu" : null}>
                    <Link href="/showroom">Showroom</Link>
                  </li>
                  <li className={asPath === "/nosotros" ? "active-menu" : null}>
                    <Link href="/nosotros">Nosotros</Link>
                  </li>
                  <li className={asPath === "/locales" ? "active-menu" : null}>
                    <Link href="/locales">Locales</Link>
                  </li>
                  <li className={asPath === "/contacto" ? "active-menu" : null}>
                    <Link href="/contacto">Contacto</Link>
                  </li>
                </ul>
              </div>
              {/* Icon header */}

              <div className="wrap-icon-header flex-w flex-r-m">
                <div
                  onClick={showSearch}
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search"
                >
                  <i className="zmdi zmdi-search" />
                </div>

                <ul className="main-menu">
                  {useSession().status === "authenticated" ? (
                    <li>
                      <h5>{session.user.email}</h5>
                      <a onClick={() => signOut()}>Cerrar Sesión</a>
                    </li>
                  ) : (
                    <li>
                      <a onClick={signIn}>Iniciar Sesión</a>
                    </li>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* Header Mobile */}
        <div className="wrap-header-mobile ">
          {/* Logo moblie */}
          <div className="logo-mobile">
            <Link href="/" legacyBehavior>
              <img src="https://i.imgur.com/GFS3QSN.png" alt="IMG-LOGO" />
            </Link>
          </div>
          {/* Icon header */}

          <div className="wrap-icon-header flex-w flex-r-m m-r-15">
            <div
              onClick={showSearch}
              className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search"
            >
              <i className="zmdi zmdi-search" />
            </div>
          </div>
          {/* Button show menu */}
          <div
            onClick={mobileMenu}
            className="btn-show-menu-mobile hamburger hamburger--squeeze"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
        </div>
        {/* Menu Mobile */}
        <div className="menu-mobile mobile-transform ">
          <ul className="main-menu-m">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/showroom">Showroom</Link>
            </li>
            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="/locales">Locales</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        {/* Modal Search */}
        <SearchBar></SearchBar>
      </header>
    </>
  );
};
