const express = require("express")
const router = express.Router()
const Student = require("../models/students/index")

router.get("/", async (req, res) => {
    const students = await Student.find({})
    res.send(students)
})

router.get("/:id", async(req, res) => {
    const student = await Student.findOnde({_id: req.params.id})
    if(student){
        res.status(200).send(student)
    } else {
        res.send("STUDENT NOT FOUND")
    }
})

router.post("/", async(req, res) => {
    try{
        const obj = {
            ...req.body,
            numberOfProjects: 0
        }
        const newStudent = await Student.create(obj)
        newStudent.save()
        res.send(newStudent)
    } catch(err){
        res.send(err)
    }
})

router.put("/:id", async(req, res) => {
    try{
        delete req.body._id
        const obj = {
            ...req.body,
            updatedAy: new Date()
        }
        const newStudent = await Student.findOneAndUpdate({_id: req.params.id}, {$set: {obj}}, (err, updatedProfile) => {
            if(err){
                console.log(err.message);
            } else {
                console.log(updatedProfile);
            }
        })
        newStudent.save()
        res.send(newStudent)
    } catch(err){
        res.send(err)
    }
})

router.delete("/:id", async(req, res) => {
    try{
        const student = await Student.findOneAndDelete({_id:req.params.id})
        if(student) res.send("deleted")
        else res.send("student not found")
    } catch(err){
        console.log(err)
    }
})

module.exports = router