import _ from 'lodash'

const user={
    name:"Raj",
    gender:'male'
}
const checkGender=(user,gender)=>{
    if(!user){
        console.log("Please enter the object and property to check")
    }
    else if(!gender){
        console.log("Please enter the property to check")
    }else{
     if(user.hasOwnProperty(gender)){
        console.log("true")
     }else{
        console.log("false")
     }
    }
}
checkGender(user,"gender")
checkGender(user,"interests")
checkGender(user)
checkGender()



