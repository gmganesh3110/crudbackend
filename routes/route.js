import express from 'express'
const router=express.Router()
import { addUser,getUsers,getUser,editUser,deleteUser } from '../controller/userController.js'

router.post('/adduser',addUser)
router.post('/allusers',getUsers)
router.post('/getUser',getUser)
router.post('/edituser',editUser)
router.post('/deleteuser',deleteUser)



export default router;