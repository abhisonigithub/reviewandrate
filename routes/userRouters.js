
const express = require('express');
const router = express.Router()
const user = require ('../controllers/userController')

router.post("/registeruser", user.userSighup);

module.exports=router;