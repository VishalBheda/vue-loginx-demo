var express = require('express')
var router = express.Router()

let userObject = {
    email: 'test',
    password: 'test',
    username: 'test'
}

router.post('/login', function (req, res) {

    let email = req.body.email,
        password = req.body.password

    console.log(`email ${email} password ${password}`)
    if(email == userObject.email && password == userObject.password){
        res.send(userObject)
    } else {
        res.send(false)
    }

})

router.post('/register', function (req, res) {

    userObject.email = req.body.email
    userObject.password = req.body.password
    userObject.username = req.body.username

    res.send(true)
})

module.exports = router
