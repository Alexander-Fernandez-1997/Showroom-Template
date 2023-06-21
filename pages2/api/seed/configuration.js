import conn from "../../../lib/db";
import storeKey from "../../../utils/storeKey";

export default async (req, resp) => {
  const html = `
  <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-8">
              <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                <h3 className="mtext-111 cl2 p-b-16">Nuestra mision</h3>
                <p className="stext-113 cl6 p-b-26">
                  Desde 1983, con un grupo de colaboradores cuya misión es
                  comprender, apoyar y amar a la mujer en cualquier condición.
                  Así es que desde entonces cada año es una atención constante
                  al pedido de nuestras clientas, tratamos de que cada una se
                  sienta cómoda, libre y contenta a la hora de probarse las
                  mallas, apoyamos totalmente al estilo que elijan, siempre y
                  cuando lo lleve puesto una mujer orgullosa de ser ella misma.
                </p>
                <p className="stext-113 cl6 p-b-26">
                  Bikinis, enterizas, tankinis, ponete lo que te haga sentir
                  única y hermosa, no te hacen falta medidas perfectas, la playa
                  es tu pasarela, disfruta el show. En Bahía los prejuicios
                  sobre los cuerpos ajenos, son lo único que está fuera de moda
                  porque el estilo no tiene talla.
                </p>
                <p className="stext-113 cl6 p-b-26">
                  ¡Atrevete! La decisión es tuya mujer, no te vistas para
                  agradar a los demás, concentrate en tu verdadero ser, no vas a
                  conocer la valentía hasta que uses esa malla que crees que no
                  te va a quedar bien. Si te hace feliz úsalo y comete el
                  verano.
                </p>
              </div>
            </div>
            <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
              <div className="how-bor1 ">
                <div className="hov-img0">
                  <img src="images/bahia/aboutcurvi.jpg" alt="IMG" />
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
  try {
    const configuration = {
      store_banner: "https://i.imgur.com/4ZQ3Z9Q.png",
      store_slogan: "Locales",
      about_banner: "https://i.imgur.com/4ZQ3Z9Q.png",
      about_slogan: "Nosotros",
      about_html: html,
      contact_banner: "https://i.imgur.com/4ZQ3Z9Q.png",
      contact_slogan: "Contacto",
      store_id: storeKey,
    };
    console.log("configuration", storeKey);

    const {
      store_banner,
      store_slogan,
      about_banner,
      about_slogan,
      about_html,
      contact_banner,
      contact_slogan,
      store_id,
    } = configuration;

    // create a new configuration
    const results = await conn.query(
      `
      INSERT INTO configuration (store_banner, store_slogan, about_banner, about_slogan, about_html, contact_banner, contact_slogan, store_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id
      `,
      [
        store_banner,
        store_slogan,
        about_banner,
        about_slogan,
        about_html,
        contact_banner,
        contact_slogan,
        store_id,
      ]
    );
    console.log(results);
    resp.status(200).json(results.rows[0]);
  } catch (e) {
    resp.status(500).json({ message: e.message });
  }
};
