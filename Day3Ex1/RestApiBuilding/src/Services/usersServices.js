import userModel from "../Schema/userSchema.js";
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import bcrypt from 'bcrypt'
dotenv.config();

const getAllUsers = async () => {
  try {
    let allUsers = await userModel.find();
    return allUsers;
  } catch (e) {
    return e.message;
  }
};
const addUser = async (user) => {
  try {
    let newUser = await userModel.create(user);
    return newUser;
  } catch (e) {
    return e.message;
  }
};
const registerUser = async (data) => {
  const { email } = data;
  try {
    let existedUser = await userModel.findOne({ email: email });
    if (existedUser.length > 0) {
      return "Email Already Exists";
    } else {
       const hashedPassword=await bcrypt.hash(data.password,10);
       const newUser={
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        password:hashedPassword,
       };
      let reigstered = await userModel.create(newUser);
      return `User Successfully Registered ${reigstered}`;
    }
  } catch (e) {
    return e.message;
  }
};
const loginUser = async (data) => {
  const { email, password } = data;
  try {
    let existedUser = await userModel.findOne({ email: email });
    if (existedUser && bcrypt.compare(existedUser.password,password)) {
       const token=jwt .sign(data.email, process.env.ACCESS_TOKEN);
        return token;
    }
       else {
        throw new Error( "Wrong Credentials");
      }
  } catch (e) {
    return e.message;
  }
};

export { getAllUsers, addUser, registerUser, loginUser };
