//install libraries
const express = require('express');
//router ek library hogi jo express contain karega
const router = express.Router();
//home page ka rout yaha per likhenge 
router.get('/',require('../controller/user_controller').home);
//user ,create karenge uska rout yaha likhenge
router.post('/create/user',require('../controller/user_controller').createUser);
// delete user 
router.get('/user/delete/:id' , require('../controller/user_controller').destroy);
//ab isko export kar denge
module.exports = router;