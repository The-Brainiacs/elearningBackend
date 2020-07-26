
const functions = require('firebase-functions')
const express = require("express")
const app = express();

const studentsRouter = require('./api/controllers/students_controller')
const msgsRouter = require("./api/controllers/msgs_controller")
const calendarRouter = require("./api/controllers/calendar_controller")
const coursesRouter = require("./api/controllers/courses_controller")

app.use(express.json())
app.use('/students', studentsRouter)
app.use("/msgs", msgsRouter)
app.use("/calendar", calendarRouter)
app.use("/courses", coursesRouter)



exports.api = functions.https.onRequest(app)

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
    timeoutSeconds: 300
})

exports.setupdb = functions.https.onRequest(require('./setup_database'))

