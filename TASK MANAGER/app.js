const express = require('express');
const app = express();
const tasks = require('./routes/tasks-routes')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware - parse incoming req body with JSON payloads
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('Hello')
})

//Middleware - Handle request that matches this route 'tasks'
app.use('/api/v1/tasks', tasks)


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





// app.get('api/v1/tasks')                - get all the task
// app.post('api/v1/tasks')               - create a new task
// app.get('api/v1/tasks/:id')            - get a single task
// app.patch('api/v1/tasks/:id')          - update task
// app.delete('api/v1/tasks/:id')         - delete task


