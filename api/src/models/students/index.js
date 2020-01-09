const mongoose = require("mongoose")

const studentsSchema = new mongoose.Schema({
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
    }
})

const studentCollection = mongoose.model("student", studentsSchema)

module.exports = studentCollection