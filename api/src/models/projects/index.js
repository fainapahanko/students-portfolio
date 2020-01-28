const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true
    },
    gitUrl: { 
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    liveUrl: { 
        type: String,
        required: true,
        unique: true
    },
    created:{ 
        type: String,
        required: false
    }
})

const projectCollection = mongoose.model("project", projectSchema)

module.exports = projectCollection
