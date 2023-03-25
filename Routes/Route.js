const express=require('express');
const { usercreate, getalluser, getsingleuser, deleted, getupdateuser } = require('../Controllers/control');


const router=express.Router();


router.get('/',getalluser)

router.post('/',usercreate)

router.get('/:id',getsingleuser)


router.delete('/:id',deleted)

router.patch('/:id',getupdateuser)


module.exports = router;