const mongoose = require("mongoose") 
const passportMongoose = require("passport-local-mongoose")

const usersSchema = new mongoose.Schema({
    // username: {
    //     type: String,
    //     required: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'profile'
    }
})

usersSchema.plugin(passportMongoose)

const usersCollection = mongoose.model("user", usersSchema)

module.exports = usersCollection