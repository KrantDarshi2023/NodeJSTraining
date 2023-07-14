import { getAllUsers,addUser,registerUser,loginUser } from "../Services/usersServices.js";

const getAllUsersController=async (req,res)=>{
     const allUsers=await getAllUsers();
     res.send(allUsers) ;
}
const addUserController=async(req,res)=>{
     const data=req.body;
     let newUser=await addUser(data);
     res.send(newUser); 
}
const registerUserController=async(req,res)=>{
     const response=await registerUser(req.body);
     res.send(response)
}
const loginUserController=async(req,res)=>{
    const response=await loginUser(req.body);
    res.send(response)
}
export {getAllUsersController,addUserController,registerUserController,loginUserController}