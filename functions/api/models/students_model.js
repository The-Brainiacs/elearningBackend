const database = require('../database');

// Here, we are implementing the class with Singleton design pattern

class StudentsModel {
    constructor() {
        if (this.instance) return this.instance;
        StudentsModel.instance = this;
    }

    get() { return database.getList('students') }

    getById(id) { return database.get('students', id) }

    getByUID(id) { return database.getUIDProfile('students', id) }

    // create(students) { return database.create('students', users) }

    // delete(id) { return database.delete('students', id) }

    update(id, students) { return database.set('students', id, students) }
}

module.exports = new StudentsModel();