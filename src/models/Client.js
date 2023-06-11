import Model from "./model.js";

class Client extends Model {
  constructor(data) {
    super();
    this.id = data.id;
    this.store_id = data.store_id;
    this.email = data.email;
    this.password = data.password;
  }

  // Properties for the Client class
  static table = "clients";
  static columns = "store_id, email, password";
  static columnUpdatePlaceholders = "store_id = $1, email = $2, password = $3";
  static columnCount = 3;
  static paramPlaceholders = "$1, $2, $3";
  static endpoint = "clients";

  // server-side methods
  static async sv_create(data) {
    return super.sv_create(data);
  }

  static async sv_find(id) {
    return super.sv_find(id);
  }

  static async sv_findAll() {
    return super.sv_findAll();
  }

  static async sv_update(id, data) {
    return super.sv_update(id, data);
  }

  static async sv_delete(id) {
    return super.sv_delete(id);
  }

  // client-side methods
  static create(data) {
    super.create(data);
  }

  static async find(id) {
    return super.find(id);
  }

  static async findAll() {
    return super.findAll();
  }

  static async update(id, data) {
    return super.update(id, data);
  }

  static async delete(id) {
    return super.delete(id);
  }
}

export default Client;
