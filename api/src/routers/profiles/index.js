const express = require("express")
const router = express.Router()
const Profile = require("../../models/profiles/index")
const Project = require("../../models/projects/index")

router.get("/", async (req, res) => {
    try{
        res.send(await Profile.findAll({}))
    } catch(err){
        res.send(err)
    }
})

// router.get("/", async (req, res) => {
//     try{
//         if(req.query){
//             const  limit = req.query.limit || 5
//             const offset = req.query.offset || 0
//             const order = req.query.order || "ASC"
//             delete req.query.limit;
//             delete req.query.offset
//             delete req.query.order
//             const students = await Student.find({
//                 where: {
//                     ...req.query
//                 },
//                 limit: limit,
//                 offset: offset,
//                 order: [
//                     ['title', order]
//                 ]
//             })
//             res.send(students)
//         } else {
//             const students = await Student.find({})
//             res.send(students)
//         }
//     } catch(err){
//         res.send(err)
//     }
// })

// router.get("/:id", async(req, res) => {
//     const student = await Student.findOnde({_id: req.params.id})
//     if(student){
//         res.status(200).send(student)
//     } else {
//         res.send("STUDENT NOT FOUND")
//     }
// })

// router.post("/", async(req, res) => {
//     try{
//         const obj = {
//             ...req.body,
//             numberOfProjects: 0
//         }
//         const newStudent = await Student.create(obj)
//         newStudent.save()
//         res.send(newStudent)
//     } catch(err){
//         res.send(err)
//     }
// })

// router.put("/:id", async(req, res) => {
//     try{
//         delete req.body._id
//         const obj = {
//             ...req.body,
//             updatedAt: new Date()
//         }
//         await Student.updateOne({_id: req.params.id}, {$set: obj}, (err, updatedProfile) => {
//             if(err){
//                 console.log(err.message);
//             } else {
//                 console.log(updatedProfile);
//             }
//         })
//         res.send("OK")
//     } catch(err){
//         res.send(err)
//     }
// })

// router.delete("/:id", async(req, res) => {
//     try{
//         const student = await Student.findOneAndRemove({_id: req.params.id})
//         await Project.deleteMany({studentId: req.params.id})
//         if(student) res.send("deleted")
//         else res.send("student not found")
//     } catch(err){
//         console.log(err)
//     }
// })

// router.get("/projects", async (req, res) => {
//     const projects = await Project.find({})
//     res.send(projects)
// })

// router.get("/projects/:id", async (req, res) => {
//     const project = await Project.findOne({ _id: req.params.id })
//     if (project) {
//         res.status(200).send(project)
//     } else {
//         res.send("PROJECT NOT FOUND")
//     }
// })

// // router.get("/projects-for-one-student/:studentId", async(req,res) => {
// //     const student = await Student.findOne({ _id: req.params.studentId}).populate('projects')
// //     res.send(student.projects)
// // })

router.post("/projects", async (req, res) => {
    try {
        // const obj = {
        //     ...req.body,
        //     studentId: req.params.studentId,
        // }
        const newProject = await Project.create(req.body)
        // const user = await Profile.updateOne(
        //     { _id: req.params.id }, 
        //     { $push: { "projects" : newProject._id }, $inc : {"numberOfProjects" : 1} }
        // )
        newProject.save()
        // user.save()
        res.send(newProject)
    } catch (err) {
        res.send(err)
    }
})

// router.put("/projects/:id", async (req, res) => {
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

// router.delete("/projects/:id/:studentId", async (req, res) => {
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