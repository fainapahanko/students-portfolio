const express = require("express")
const server = express()
const dotenv = require("dotenv")
const profilesRouter = require("./src/routers/profiles")
const projectsRouter = require("./src/routers/projects")
const usersRouter = require("./src/routers/users")
const listEndpoints = require("express-list-endpoints");
const cors = require("cors")
const mongoose = require("mongoose")
const MongoClient = require('mongodb').MongoClient;
mongoose.Promise = require('bluebird');
const passport = require("passport") 
const passportConfig = require("./passport-config.js")
const port = process.env.PORT || 5000
dotenv.config()

server.use(express.json())
server.use(cors())
server.use(passport.initialize())
server.use("/profiles", profilesRouter)
server.use("/projects", projectsRouter)
server.use("/users", usersRouter)
server.use("/img", express.static("img"))

server.get("/testBasicAuth", passportConfig.basicAuth , (req, res)=>{
  try{
    console.log("user")
    res.send("OK - auth")
  } catch (err){
    res.send(err)
  }
})

server.get("/test",  (req, res)=>{
  res.send("OK - auth")
})


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

// server.use((err, req, res, next) => {
//     if (!res.headersSent) {
//       res.status(err.httpStatusCode || 500).send(err);
//     }
// });


server.use(function(err, req, res, next) {
  // Do logging and user-friendly error message display
  console.error(err);
  res.status(500).send('internal server error');
})




const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// mongoose.connect(process.env.MONGODB_URI.toString(),{
//   useNewUrlParser: true, 
//   useUnifiedTopology: true
// })

console.log(process.env.MONGODB_URI)

server.listen(port, () => {
    console.log("We are running on localhost", port)
})


console.log(listEndpoints(server))

module.exports = server