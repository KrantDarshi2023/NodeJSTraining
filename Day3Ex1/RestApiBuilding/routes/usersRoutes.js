import express from 'express'
import { addUserController, getAllUsersController, loginUserController, registerUserController } from '../Controller/usersController.js';

var userRouterExc=express.Router();

userRouterExc.get('/', getAllUsersController)
userRouterExc.post('/addUser',addUserController)
userRouterExc.post('/registerUser',registerUserController)
userRouterExc.post('/loginUser', loginUserController)

export default  userRouterExc;
