import conn from "../../../lib/db";
import storeKey from "../../../utils/storeKey";

export default async (req, resp) => {
  try {
    const notes = [
      {
        tittle: "¿Cuál es el horario de atención?",
        description: "El horario de atención es de 9:00 a 18:00",
        store_id: storeKey,
      },
      {
        tittle: "¿Se puede hacer compras al por mayor?",
        description: "Si, se puede hacer compras al por mayor",
        store_id: storeKey,
      },
      {
        tittle: "¿Se puede hacer compras al por menor?",
        description: "Si, se puede hacer compras al por menor",
        store_id: storeKey,
      },
      {
        tittle:
          "¿Cualés son los medios de contacto para poder hacer una compra?",
        description:
          "Puede contactarnos a través de llamado telefonico o por whatsapp. Tambien puede enviarnos un mensaje en el formulario de contacto o acercarse al local.",
        store_id: storeKey,
      },
      {
        tittle: "¿Cuanto tardan en resolver una consulta?",
        description: "En el transcurso de 24 horas",
        store_id: storeKey,
      },
    ];
    notes.forEach(async (note) => {
      const { tittle, description, store_id } = note;

      const query = `INSERT INTO notes (tittle, description, store_id) VALUES ('${tittle}', '${description}', ${store_id})`;

      const result = await conn.query(query);
      console.log(result);
    });
    resp.status(200).json({ message: "notes creadas" });
  } catch (err) {
    console.log(err);
    resp.status(500).json({ message: err.message });
  }
};
