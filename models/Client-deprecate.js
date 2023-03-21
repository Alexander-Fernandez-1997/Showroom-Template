import conn from "../lib/db.js";

class Client {
  constructor(store_id, email, password) {
    this.store_id = store_id;
    this.email = email;
    this.password = password;
  }

  static create(store_id, email, password) {
    const client = new Client(store_id, email, password);
    fetch("/api/clients", {
      method: "POST",
      body: JSON.stringify(client),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => alert(result.message))
      .catch((error) => console.error(error));
  }

  static async find(id) {
    try {
      const response = await fetch(`/api/clients/${id}`);
      const client = await response.json();
      return client;
    } catch (error) {
      console.error(error);
    }
  }

  static async findAll() {
    try {
      const response = await fetch("/api/clients");
      const clients = await response.json();
      return clients;
    } catch (error) {
      console.error(error);
    }
  }

  static async update(id, store_id, email, password) {
    try {
      const client = new Client(store_id, email, password);
      const response = await fetch(`/api/clients/${id}`, {
        method: "PUT",
        body: JSON.stringify(client),
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error(error);
    }
  }

  static async delete(id) {
    try {
      const response = await fetch(`/api/clients/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error(error);
    }
  }

  //Server version of each method

  static async sv_create({ store_id, email, password }) {
    const query = await conn.query(
      `INSERT INTO clients (store_id, email, password) VALUES ($1, $2, $3) RETURNING id`,
      [store_id, email, password]
    );
    const [client] = query.rows;
    return new Client(client.store_id, client.email, client.password);
  }

  static async sv_find(id) {
    const query = await conn.query(`SELECT * FROM clients WHERE id = $1`, [id]);
    const [client] = query.rows;
    return new Client(client.store_id, client.email, client.password);
  }

  static async sv_findAll() {
    const query = await conn.query("SELECT * FROM clients");
    const clients = query.rows;

    return clients;
  }

  static async sv_update(id, { store_id, email, password }) {
    const query = await conn.query(
      `UPDATE clients SET store_id = $1, email = $2, password = $3 WHERE id = $4 RETURNING *`,
      [store_id, email, password, id]
    );
    const [client] = query.rows;
    return new Client(client.store_id, client.email, client.password);
  }

  static async sv_delete(id) {
    const query = await conn.query(`DELETE FROM clients WHERE id = $1`, [id]);
    return query;
  }
}

export default Client;
