const database = require("../database");

// Here, we are implementing the class with Singleton design pattern

class CalendarModel {
  constructor() {
    if (this.instance) return this.instance;
    CalendarModel.instance = this;
  }

  get() {
    return database.getList("calendar");
  }

  create(cal) {
    return database.create("calendar", cal);
  }

}

module.exports = new CalendarModel();
