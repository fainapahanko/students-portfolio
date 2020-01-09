const express = require("express")
const router = express.Router()
const Project = require("../models/projects/index")
const Student = require("../models/students/index")
var mongo = require('mongodb').MongoClient

router.get("/", async (req, res) => {
    const projects = await Project.find({})
    res.send(projects)
})

router.get("/:id", async(req, res) => {
    const project = await Project.findOnde({_id: req.params.id})
    if(project){
        res.status(200).send(project)
    } else {
        res.send("STUDENT NOT FOUND")
    }
})

router.post("/:id", async(req, res) => {
    try{
        const newProject = await Project.create(req.body)
        const student = await Student.updateOne({_id: req.params.id},{$set: {"numberOfProjects" : numberOfProjects++}})
        console.log(student)
        newProject.save()
        student.save()
        res.send(student)
    } catch(err){
        res.send(err)
    }
})

router.put("/:id", async(req, res) => {
    try{
        delete req.body._id
        const newProject = await Project.findOneAndUpdate({_id: req.params.id}, {$set: {...req.body}})
        newProject.save()
        req.send(newProject)
    } catch(err){
        res.send(err)
    }
})

router.delete("/:id", async(req, res) => {
    try{
        const project = await Project.findOneAndDelete({_id:req.params.id})
        if(project) res.send("deleted")
        else res.send("student not found")
    } catch(err){
        console.log(err)
    }
})

module.exports = router