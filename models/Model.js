import conn from "../lib/db.js";

class Model {
  constructor() {}

  // client-side methods
  static create(data) {
    fetch(`/api/${this.endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => alert(result.message))
      .catch((error) => console.error(error));
  }

  static async find(id) {
    try {
      const response = await fetch(`/api/${this.endpoint}/${id}`);
      const data = await response.json();
      return new this(data);
    } catch (error) {
      console.error(error);
    }
  }

  static async findAll() {
    try {
      const response = await fetch(`/api/${this.endpoint}`);
      const data = await response.json();
      return data.map((item) => new this(item));
    } catch (error) {
      console.error(error);
    }
  }

  static async update(id, data) {
    try {
      const response = await fetch(`/api/${this.endpoint}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
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
      const response = await fetch(`/api/${this.endpoint}/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error(error);
    }
  }

  // server-side methods
  static async sv_create(data) {
    const query = await conn.query(
      `INSERT INTO ${this.table} (${this.columns}) VALUES (${this.paramPlaceholders}) RETURNING id`,
      this.paramValues(data)
    );
    const [item] = query.rows;
    return new this(item);
  }

  static async sv_find(id) {
    const query = await conn.query(
      `SELECT * FROM ${this.table} WHERE id = $1`,
      [id]
    );
    const [item] = query.rows;
    return new this(item);
  }

  static async sv_findAll() {
    const query = await conn.query(`SELECT * FROM ${this.table}`);
    const items = query.rows;
    return items.map((item) => new this(item));
  }

  static async sv_update(id, data) {
    const query = await conn.query(
      `UPDATE ${this.table} SET ${this.columnUpdatePlaceholders} WHERE id = $${this.columnCount} RETURNING *`,
      this.paramValues(data, id)
    );
    const [item] = query.rows;
    return new this(item);
  }

  static async sv_delete(id) {
    const query = await conn.query(`DELETE FROM ${this.table} WHERE id = $1`, [
      id,
    ]);
    return query;
  }
}

export default Model;
