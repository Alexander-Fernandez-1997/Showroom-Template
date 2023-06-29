import { simpleFetch } from "utils/simpleFetch";

export const FooterContact = async () => {
  const { instagram, wpNumber } = await simpleFetch(
    "stores/social",
    "isr",
    "60"
  );

  return (
    <div className="col-sm-6 col-lg-3 p-b-50">
      <h4 className="stext-301 cl0 p-b-30">Contactenos</h4>
      <p className="stext-107 cl7 size-201">
        Tiene alguna consulta? <br></br> Visitenos en alguno de nuestros locales
        o comuniquese atraves de: <br></br>
        <a
          className="cl7 hov-cl1 trans-04 m-r-16"
          target="_blank"
          rel="noreferrer"
          href={`https://api.whatsapp.com/send?phone=${
            wpNumber || ""
          }&text=Me%20interesa%20saber%20mas%20sobre%20los%20productos`}
        >
          Whatsapp: {wpNumber || ""}
        </a>{" "}
        <br />
        <a
          className="cl7 hov-cl1 trans-04 m-r-16"
          href={`https://www.instagram.com/${instagram || ""}/`}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-instagram" />
          Insta: {instagram || ""}
        </a>
      </p>
    </div>
  );
};
