const database = require('../database');

// Here, we are implementing the class with Singleton design pattern
// class Assignment{
//     constructor() {
//         if (this.instance) return this.instance;
//         AssignmentModel.instance = this;
//     }
//     get() { return database.getList('assignment') }

// }
class CoursesModel {
    constructor() {
        if (this.instance) return this.instance;
        CoursesModel.instance = this;
    }

    get() { return database.getList("courses") }

    getById(id) { return database.get("courses", id) }

    // getByUID(id) { return database.getUIDProfile('courses', id) }

    // create(users) { return database.create('courses', users) }

    // delete(id) { return database.delete('courses', id) }

    update(id, courses) { return database.set("courses", id, courses) }
}

module.exports = new CoursesModel();