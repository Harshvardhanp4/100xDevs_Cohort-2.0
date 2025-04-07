const express =  require ("express");
const app = express();



app.use(express.json());

function middleware(req,res,next){
    fetch().then*(()=>{
        next()
    })
}

app.post("/health-checkup", function(req,res){

    const kidneys = req.body.kidneys;
    const kidneyLength = kidney.length;

    res.send("you have " + kidneyLength + "kidneys");
});

//global catches

app.use(function(err,req,res,next){
    res.json({
        msg: "Sorry something went wrong on the server"
    })
})