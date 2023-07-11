import http from "http";
import fs from "fs";
import _ from "lodash";

http
  .createServer(function (req, res) {
    fs.readFile("user.json", { encoding: "utf-8" }, function (err, data) {
      const c = JSON.parse(data);
    //   res.write(
    //     JSON.stringify(
    //       _.filter(c, (person) => {
    //         return person.gender === "male";
    //       })
    //     )
    //   );
    //   res.write(
    //     JSON.stringify(
    //       _.countBy(c, (item) => {
    //         return item.gender === "male";
    //       })
    //     )
    //   );
    //   res.write(
    //     JSON.stringify(
    //       _.find(c, (item) => {
    //         return (
    //           item.name.firstName === "Vinay" && item.name.lastName === "Gajjar"
    //         );
    //       })
    //     )
    //   );
    // const arrayOfMaleId=[]
    // const arrayOfMaleName=[]
    // const arrayOfFemaleId=[]
    // const arrayOfFemaleName=[]
    //         _.forEach(c,(item)=>{
    //           if(item.gender==='male'){
    //             arrayOfMaleId.push(item.id)
    //             arrayOfMaleName.push(item.name.firstName+item.name.lastName)
    //           }else{
    //             arrayOfFemaleId.push(item.id)
    //             arrayOfFemaleName.push(item.name.firstName+item.name.lastName)
    //           }
    //         })
    //         console.log("Array Of female person ID "+arrayOfFemaleId)
    //         console.log("Array Of female person ID "+arrayOfFemaleName)
    //         console.log("Array Of male person Name "+arrayOfMaleId)
    //         console.log("Array Of female person Name "+arrayOfMaleName)

       let noOfMaleInterestedInC=0   
       let noOfFemaleInterestedInC=0    
    _.forEach(c,(item)=>{
    if(_.includes(item.interests,'c')){
        if(item.gender==='male'){
       noOfMaleInterestedInC=noOfMaleInterestedInC+1;
        }else{
            noOfFemaleInterestedInC=noOfFemaleInterestedInC+1;
        }
    }
    })
    console.log("no. of male Interested in C"+ noOfMaleInterestedInC)
    console.log("no. of female Interested in C"+ noOfFemaleInterestedInC)
        
const sortByFirstName=
    _.sortBy(c,[(item)=>{
         return item.name.firstName ;
    }])
    console.log(sortByFirstName)

    const sortByIdInDescending=
    _.sortBy(c,[(item)=>{
         return item.id ;
    }])
    console.log(sortByIdInDescending.reverse())
      res.end();
    });
  })
  .listen(8000);
