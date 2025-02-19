//create an http server
//express
//node default library

const express = require("express")
const app = express();

const users =[{
    name: "John",
    kidneys:[{
        healthy:false
    }]
}];

app.use(express.json());


app.get("/",function(req,res){
  const johnKidneys = users[0].kidneys;
  const numberofKidneys= johnKidneys.length;
  let numberofHeakthyKidneys=0;

  for(let i = 0; i<johnKidneys;i++){
    if(johnKidneys[i].healthy){
        numberofHeakthyKidneys=numberofKidneys+1;
    }
  }
  const numberofUnhealthyKidneys=numberofKidneys-numberofHeakthyKidneys;
  res.json({
    johnKidneys,
    numberofHeakthyKidneys,
    numberofUnhealthyKidneys
  })


})


app.post("/",function(req,res){

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy 
    })

    res.json({
        msg:"Done"
    })
})


app.put("/",function(req,res){
    for(let i = 0; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
})
app.listen(3000); 