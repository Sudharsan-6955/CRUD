import express from 'express' //import express
import { deleteUser, getUser, postUser, putUser, UserDetail } from '../controllers/controlling.js' //import the routes

const router = express.Router() //declare the router 

router.get('/', getUser) //Get existing user
router.post('/', postUser) //Post new user
router.get('/:id', UserDetail) //geting specific users
router.put('/:id', putUser) //Update the specific user
router.delete('/:id', deleteUser) //delete the specific user


export default router //export the router