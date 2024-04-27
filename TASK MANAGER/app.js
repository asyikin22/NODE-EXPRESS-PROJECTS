const express = require('express');
const app = express();
const tasks = require('./routes/tasks-routes')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//Middleware to serve static file
app.use(express.static('./public'))

//middleware - parse incoming req body with JSON payloads
app.use(express.json())

//Middleware - Handle request that matches this route 'tasks'
app.use('/api/v1/tasks', tasks)

//Middleware - To handle 404 response
app.use(notFound)

//Middleware to handle error
app.use(errorHandlerMiddleware)


const port = 3000

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, (req, res) => {
            console.log(`Server is listening on port ${port}`);
        })

    } catch (error) {
        console.log(error)
    }
}

start()


