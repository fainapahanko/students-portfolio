const express = require("express")
const server = express()
const dotenv = require('./node_module/dotenv');
const studentsRouter = require("./src/students/index")
const listEndpoints = require("express-list-endpoints");
const cors = require("cors")
dotenv.config();

server.use(express.json())
server.use(cors())
const port = process.env.PORT

server.use("/students", studentsRouter)

const LoggerMiddleware = (req, res, next) => {
    console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`);
    next();
};

server.use(LoggerMiddleware)

server.use((err, req, res, next) => {
    if (err.httpStatusCode === 403) {
      res.status(403).send("Forbidden");
    }
    next(err);
});

server.use((err, req, res, next) => {
    // console.log(err);
    if (!res.headersSent) {
      // perchè potrebbe avere mandato già uno dei middlewares di sopra
      res.status(err.httpStatusCode || 500).send(err);
    }
});

server.listen(port, () => {
    console.log(`Yo we are in the localhost ${port}`)
})

console.log(listEndpoints(server))

module.exports = server