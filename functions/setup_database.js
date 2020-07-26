const db = require('./api/database')

async function setupDatabase(req, res, next) {
  // const collections = ['students', 'courses' ,'msgs', 'calendar']
  // collections.forEach(async (collection) => await deleteCollection(collection))
  
  // Add documents to the students collection
  addDocuments("students", [
      { name: "Muhammad Abu Bin Azman", matric: "A17CS0001", email: "m.abu@gmail.com", phone: "0199090090"},
      { name: "Muhammad Aiman Bin Azman", matric: "A17CS0002", email: "abu@gmail.com", phone: "0199090090"} 
  ]);

  // Add documents to the courses collection
  addDocuments("courses", [
      { title: "Software Quality Assurance", lecturer: "Dr. Ell", pictPath: "assets/images/a.png", 
      assignment: [{title: "test case", status:true}]},
      { title: "Biology", lecturer: "Dr. Yow", pictPath: "assets/images/b.png", 
      assignment: [{title: "Human Cell", status:false},{title: "Animal", status:true}]},
      { title: "Mathematic", lecturer: "Dr. Ali", pictPath: "assets/images/c.png", 
      assignment: [{title: "Additional", status:false}]}
  ]);

  // Add documents to the msgs collection
  addDocuments("msgs", [
    { name: "Abu", textmsg: "Meeting at 8" },
    { name: "Ali", textmsg: "Heyyy whasupp" },
    { name: "Atan", textmsg: "Can you meet me at class?" },
  ]);

  // Add documents to the calendar collection
  addDocuments("calendar", [
    { date: "28-08-2020", description: "Prepare proposal for the new project"},
    { date: "25-09-2020", description: "Register Course" },
  ]);

    res.send('Setting Up Database...Done ')
}

async function deleteCollection(collection) {
    const cref = db.firestore.collection(collection)
    const docs = await cref.listDocuments()
    docs.forEach((doc) => doc.delete())
}

function addDocuments(collection, docs) {
    docs.forEach((doc) => db.create(collection, doc))
}

module.exports = setupDatabase