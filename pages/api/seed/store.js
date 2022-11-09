import conn from "../../../lib/db";

export default async (req, resp) => {
  try {
    const store = {
      id: 1,
      name: "Template",
      logo: "https://i.imgur.com/GFS3QSN.png",
      phone_number: "1120635160",
      wp_number: "1120635160",
      instagram: "instatemplate",
      email: "templatestore@gmail.com",
      street: "Av. Rivadavia",
      street_number: "1234",
      city: "CABA",
      province: "CABA",
      country: "Argentina",
      main_banner: "https://i.imgur.com/uvX7j6q.jpg",
      slogan: "This is a template slogan",
    };

    const query = `INSERT INTO stores (id, name, logo, phone_number, wp_number, instagram, email, street, street_number, city, province, country, main_banner, slogan) VALUES (${store.id}, '${store.name}', '${store.logo}', '${store.phone_number}', '${store.wp_number}', '${store.instagram}', '${store.email}', '${store.street}', '${store.street_number}', '${store.city}', '${store.province}', '${store.country}', '${store.main_banner}', '${store.slogan}')`;

    const result = await conn.query(query);
    console.log(result);
    resp.status(200).json({ message: "store creado" });
  } catch (err) {
    console.log(err);
    resp.status(500).json({ message: err.message });
  }
};
