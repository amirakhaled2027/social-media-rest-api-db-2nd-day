//let's say auth stands fot authentication, login information, ..etc.
const router = require('express').Router()
const User = require('../models/User')

//Register
//we're gonna take information from the client side
router.get('/register',  async (req,res) => {

    //save user and response
    const user = await new User({
        username:'amira',
        email:'amira@gmail.com',
        password:'123456'
    })

    //user.save() is used to save a new user instance to a database.
    await user.save()
    res.send('ok')
})

module.exports = router