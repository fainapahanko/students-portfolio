const express = require("express")
const router = express.Router()
const Project = require("../../models/projects/index")

router.get("/", async (req, res) => {
    const projects = await Project.find({})
    res.send(projects)
})

// router.get("/:id", async (req, res) => {
//     const project = await Project.findOne({ _id: req.params.id })
//     if (project) {
//         res.status(200).send(project)
//     } else {
//         res.send("PROJECT NOT FOUND")
//     }
// })

// router.get("/projects-for-one-student/:studentId", async(req,res) => {
//     const student = await Student.findOne({ _id: req.params.studentId}).populate('projects')
//     res.send(student.projects)
// })

// router.post("/:id/:name/:surname", async (req, res) => {
//     try {
//         const cred = req.params.name + " " + req.params.surname
//         const obj = {
//             ...req.body,
//             studentId: req.params.id,
//             author: cred
//         }
//         const newProject = await Project.create(obj)
//         const user = await User.updateOne(
//             { _id: req.params.id }, 
//             { $push: { "projects" : newProject._id }, $inc : {"numberOfProjects" : 1} }
//         )
//         newProject.save()
//         student.save()
//         res.send(student)
//     } catch (err) {
//         res.send(err)
//     }
// })

// router.put("/:id", async (req, res) => {
//     try {
//         delete req.body._id
//         const obj = {
//             ...req.body,
//             updatedAt: new Date()
//         }
//         await Project.updateOne({ _id: req.params.id }, { $set: obj }, (err, updateProject) => {
//             if(err){
//                 console.log(err.message);
//             } else {
//                 console.log(updateProject);
//             }
//         })
//         res.send("OK")
//     } catch (err) {
//         res.send(err)
//     }
// })

// router.delete("/:id/:studentId", async (req, res) => {
//     try {
//         const project = await Project.findOneAndRemove({ _id: req.params.id })
//         await Student.findOneAndUpdate({_id: req.params.studentId},{$pull:{"projects": req.params.id}, $inc: {"numberOfProjects": -1}})
//         if (project) res.send("deleted")
//         else res.send("student not found")
//     } catch (err) {
//         console.log(err)
//     }
// })

module.exports = router