const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    surname: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true,
        unique: true
    },
    dateOfBirth:{ 
        type: Date,
        required: true
    },
    imgUrl: { 
        type: String,
        required: false
    },
    numberOfProjects: {
        type: Number
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'project'
    }],
})

const profileCollection = mongoose.model("profile", profileSchema)

module.exports = profileCollection
