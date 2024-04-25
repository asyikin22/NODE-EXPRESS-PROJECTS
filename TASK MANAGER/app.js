const express = require('express');
const app = express();
const tasks = require ('./controller/routes/tasks-routes')

//middleware - call express.json as a function
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('Task Manager App')
})

//use tasks routes for the /api/v1/tasks
app.use('/api/v1/tasks', tasks)






// app.get('api/v1/tasks')                - get all the task
// app.post('api/v1/tasks')               - create a new task
// app.get('api/v1/tasks/:id')            - get a single task
// app.patch('api/v1/tasks/:id')          - update task
// app.delete('api/v1/tasks/:id')         - delete task


const port = 3000

app.listen(port, console.log(`Server is listening on port ${port}`))