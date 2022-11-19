import conn from "../../../lib/db";
import storeKey from "../../../utils/storeKey";

export default async (req, resp) => {
  try {
    const franchises = [
      {
        name: "Zara",
        address: "Calle de la Princesa, 1, 28008 Madrid",
        phone: "91 123 45 67",
        image_main: "https://source.unsplash.com/400x600",
        store_hours: "10:00 - 20:00",
        store_id: storeKey,
      },
      {
        name: "Pull & Bear",
        address: "Calle de la Princesa, 1, 28008 Madrid",
        phone: "91 123 45 67",
        image_main: "https://source.unsplash.com/400x600",
        store_hours: "10:00 - 20:00",
        store_id: storeKey,
      },
      {
        name: "Stradivarius",
        address: "Calle de la Princesa, 1, 28008 Madrid",
        phone: "91 123 45 67",
        image_main: "https://source.unsplash.com/400x600",
        store_hours: "10:00 - 20:00",
        store_id: storeKey,
      },
      {
        name: "Bershka",
        address: "Calle de la Princesa, 1, 28008 Madrid",
        phone: "91 123 45 67",
        image_main: "https://source.unsplash.com/400x600",
        store_hours: "10:00 - 20:00",
        store_id: storeKey,
      },
      {
        name: "H&M",
        address: "Calle de la Princesa, 1, 28008 Madrid",
        phone: "91 123 45 67",
        image_main: "https://source.unsplash.com/400x600",
        store_hours: "10:00 - 20:00",
        store_id: storeKey,
      },
    ];
    //create franchises
    franchises.forEach(async (franchise) => {
      const { name, address, phone, image_main, store_hours, store_id } =
        franchise;
      const query = `INSERT INTO franchises (name, address, phone, image_main, store_hours, store_id) VALUES ('${name}', '${address}', '${phone}', '${image_main}', '${store_hours}', ${store_id})`;
      const result = await conn.query(query);
    });
    resp.status(200).json({ message: "franchises creadas" });
  } catch (err) {
    console.log(err);
    resp.status(500).json({ message: err.message });
  }
};
