require('dotenv').config()
//async errors

const express = require('express');
const app = express();

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products-routes')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//Middlware to parse incoming JSON req body with JSON payload
app.use(express.json())

//Routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="api/v1/products">Product Route</a>')
})

//Middleware to handle request that match 'product' route
app.use('/api/v1/products', productsRouter)

//products route


//Middleware for 404 page and error
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        //connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening to port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start();



