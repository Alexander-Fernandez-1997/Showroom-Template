import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export const Navbar = ({ query, setQuery }) => {
  const { asPath } = useRouter();
  const [exist, setExist] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (asPath === "/showroom") {
      setExist(true);
    }
  }, []);

  const lfclothes = (e) => {
    e.preventDefault();
    let search = document.querySelector(".plh3");
    setQuery(search.value);
    document.querySelector(".bigsearch").classList.remove("show-modal-search");
    search.value = "";
  };

  const showSearch = () => {
    document.querySelector(".bigsearch").classList.add("show-modal-search");
  };

  const CloseSearch = () => {
    document.querySelector(".bigsearch").classList.remove("show-modal-search");
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
                {exist === true ? (
                  <div
                    onClick={showSearch}
                    className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search"
                  >
                    <i className="zmdi zmdi-search" />
                  </div>
                ) : null}
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
            {exist === true ? (
              <div
                onClick={showSearch}
                className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search"
              >
                <i className="zmdi zmdi-search" />
              </div>
            ) : null}
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
        <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search bigsearch">
          <div className="container-search-header">
            <button
              onClick={CloseSearch}
              className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search "
            >
              <img src="images/icons/icon-close2.png" alt="CLOSE" />
            </button>
            <form
              onSubmit={lfclothes}
              className="wrap-search-header flex-w p-l-15"
            >
              <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search" />
              </button>
              <input
                className="plh3"
                type="text"
                name="search"
                placeholder="Buscar..."
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      </header>
    </>
  );
};
