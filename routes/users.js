import express from 'express'
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users';


const router= express.Router();

// Requête GET /users
router.get('/',getUsers)

// get a user details
router.get('/:id', getUser)

// Requête POST /users

router.post('/', createUser)

// DELETE /users/id     
router.delete('/:id', deleteUser)

// UPDATE /users/id
router.patch('/:id', updateUser)








export default router;