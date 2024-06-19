const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()

server.use( (req, res, next ) => {
    console.log("Request received")
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, PATCH, OPTIONS"
    )
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-With, Content-type, Accept"
    )
    next()
})

server.use( router )

server.listen(3001, () => {
    console.log("JSON Server is runnig")
})