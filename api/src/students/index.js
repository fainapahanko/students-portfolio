const path = require("path")
const fs = require("fs")
const express = require("express")
const router = express.Router()
const { sanitize } = require("express-validator");

const filePath = path.join(__dirname,"students.json")

const readFile = () => {
    const buffer = fs.readFileSync(filePath)
    const fileContent = buffer.toString()
    return JSON.parse(fileContent)
}

router.get("/", (req, res) => {
    const studentsArray = readFile()
    res.send(studentsArray)
})

router.get("/:id", [sanitize("id").toInt()], (req, res) => {
    const studentsArray = readFile()
    const student = studentsArray.filter(students => students.id === req.params.id)
    if(student){
        res.status(200).send(student)
    } else {
        res.send("STUDENT NOT FOUND")
    }
})

router.post("/", (req, res) => {
    const studentsArray = readFile()
    const student = {
        name: req.body.name,
        description: req.body.description,
        created: req.body.created,
        RepoURL: req.body.RepoURL,
        LiveURL: req.body.LiveURL,
        StudentID: req.body.StudentID,
        id: studentsArray.length + 1,
    }
    studentsArray.push(student)
    fs.writeFileSync(filePath, JSON.stringify(studentsArray))
    res.send(studentsArray)
})

router.put("/:id", (req, res) => {
    const studentsArray = readFile()
    const edited = req.body
    studentsArray[req.params.id-1] = edited
    fs.writeFileSync(filePath, JSON.stringify(studentsArray))
    res.send(edited);
})

router.delete("/:id", [sanitize("id").toInt()], (req, res) => {
    const studentsArray = readFile()
    const filteredArray = studentsArray.filter(student => student.id !== req.params.id)
    if(studentsArray > filteredArray){
        fs.writeFileSync(filePath, JSON.stringify(filteredArray))
    } else {
        console.log("student not found")
    }
})

module.exports = router