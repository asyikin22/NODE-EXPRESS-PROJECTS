const mongoose = require('mongoose')


const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB


// mongoose
//     .connect(connectionString)
//     .then(() => console.log(`connected to the Database...`))
//     .catch((err) => console.log(err))


