const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err)
    return res.status(500).json({ msg: "Oh oh something's not right!"})
}

module.exports = errorHandlerMiddleware