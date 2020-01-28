const passport = require("passport")
const LocalStrategy  = require("passport-local").Strategy
const basicAuth = require("express-basic-auth")

const User = require("./src/models/users")


passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

const basic = basicAuth( { authorizer: async (username, password, cb)  => {
    // User.find({ username: username, password: hashOfPaswor})
    const ret = await User.authenticate()(username, password)
    return cb(null, ret.user)
},
authorizeAsync: true } )


module.exports = {
    local: passport.use(new LocalStrategy(User.authenticate())),
    basicAuth: basic
}
