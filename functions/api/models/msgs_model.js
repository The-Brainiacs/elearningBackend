const database = require("../database");

// Here, we are implementing the class with Singleton design pattern

class MsgModel {
  constructor() {
    if (this.instance) return this.instance;
    MsgModel.instance = this;
  }

  get() {
    return database.getList("msgs");
  }

  getById(id) {
    return database.get("msgs", id);
  }

  create(msg) {
    return database.create("msgs", msg);
  }

  delete(id) {
    return database.delete("msgs", id);
  }

  update(id, msg) {
    return database.set("msgs", id, msg);
  }
}

module.exports = new MsgModel();