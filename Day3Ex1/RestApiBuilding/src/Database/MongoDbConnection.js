import mongoose from "mongoose";
const dbConnection=()=>{
    mongoose.connect("mongodb://localhost:27017/test").then(console.log("connected"))
}
export default dbConnection;