const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../../models/users/index")

router.get('/', async(req,res) => {
    try{
        const users = await User.find({}, (err) => {
            if(err){
                res.send(err)
            }
        })
        res.status(200).send(users)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

router.post("/", async(req,res) => {
    try{
        // const salt = await bcrypt.genSalt()
        // const hachedPassword = await bcrypt.hash(req.body.password, salt)
        const obj = {
            username: req.body.username,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        console.log(`***username: ${req.body.username}`)
        console.log(`***password: ${req.body.password}`)
        const user = await User.register(obj, req.body.password,(err, account) => {
            if (err) {
                console.log("REGISTER err " + err);
                //return res.render('register', { account : account });
            }
        }) 
        console.log("yo1")
        user.save()
        console.log("yo")
        res.status(200).send(user)
    }catch(err) {
        res.status(500).send(err)
    }
})

module.exports = router