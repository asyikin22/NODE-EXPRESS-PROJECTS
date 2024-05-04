const login = async(req, res) => {
    const {username, password} = req.body

    //check in the controller

    const CustomAPIError = require('../errors/custom-error')

    if(!username || !password) {
        throw new CustomAPIError('Please provide email and password', 400)
    }
    console.log(username, password)
    res.send('Fake Login/Register/Signup route') 
 }
 
 const dashboard = async (req, res) => {
     const luckyNumber = Math.floor(Math.random()*100)
     res.status(200).json({
         msg:`Hello, Asyikin`, 
         secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
 }
 
 module.exports = {
     login, dashboard
 }

