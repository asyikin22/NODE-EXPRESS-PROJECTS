const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://asyikin:xxxxx@task-manager.dxtlho3.mongodb.net/?retryWrites=true&w=majority&appName=task-manager'

mongoose
    .connect(connectionString)
    .then(() => console.log(`connected to the Database...`))
    .catch((err) => console.log(err))

