const express = require('express')
const {
    getAllUsers,
    reqisterController,
    loginController
} =require('../controllers/userController')

const router = express.Router();

//all users || geteer avdag

router.get('/all-users',getAllUsers)

//user uusgeh || post

router.post('/register', registerController)

// login heseg || post

router.post('/login', loginController)

module.exports = router;