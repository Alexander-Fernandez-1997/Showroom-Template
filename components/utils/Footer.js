import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg3 p-t-75 p-b-32">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">Categorias</h4>
              <ul>
                <li className="p-b-10">
                  <Link
                    href="/showroom"
                    className="stext-107 cl7 hov-cl1 trans-04"
                  >
                    Bikini
                  </Link>
                </li>
                <li className="p-b-10">
                  <Link
                    href="/showroom"
                    className="stext-107 cl7 hov-cl1 trans-04"
                  >
                    Corpiño
                  </Link>
                </li>
                <li className="p-b-10">
                  <Link
                    href="/showroom"
                    className="stext-107 cl7 hov-cl1 trans-04"
                  >
                    Enteriza
                  </Link>
                </li>
                <li className="p-b-10">
                  <Link
                    href="/showroom"
                    className="stext-107 cl7 hov-cl1 trans-04"
                  >
                    Tankini
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">Info</h4>
              <ul>
                <li className="p-b-10">
                  <Link
                    href="/locales"
                    className="stext-107 cl7 hov-cl1 trans-04"
                  >
                    Locales
                  </Link>
                </li>
                <li className="p-b-10">
                  <Link
                    href="/nosotros"
                    className="stext-107 cl7 hov-cl1 trans-04"
                  >
                    Reembolsos
                  </Link>
                </li>
                <li className="p-b-10">
                  <Link
                    href="/nosotros"
                    className="stext-107 cl7 hov-cl1 trans-04"
                  >
                    Envios
                  </Link>
                </li>
                <li className="p-b-10">
                  <Link
                    href="/nosotros"
                    className="stext-107 cl7 hov-cl1 trans-04"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">Contactenos</h4>
              <p className="stext-107 cl7 size-201">
                Tiene alguna consulta? <br></br> Visitenos en alguno de nuestros
                locales o comuniquese al 011 4581-2586 <br />
                <a
                  className="cl7 hov-cl1 trans-04 m-r-16"
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=5491157510886&text=Me%20interesa%20saber%20mas%20sobre%20los%20productos%20de%20Bahia%20del%20Sol"
                >
                  Whatsapp: 1557510886
                </a>{" "}
                <br />
                <a
                  className="cl7 hov-cl1 trans-04 m-r-16"
                  href="https://www.instagram.com/bahiadelsolok/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram" /> bahiadelsolok
                </a>
              </p>
            </div>
            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">Compras</h4>

              <p className="stext-107 cl7 size-201">
                Para realizar compras al por mayor o menor les dejaremos nuestra
              </p>
              <div className="focus-input1 trans-04" />

              <div className="p-t-18">
                <Link href="/contacto" legacyBehavior>
                  <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                    Linea directa
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
