var express=require('express')

var router=express.Router();

router.get('/',(req,res)=>{
    let randomNumber=Math.floor(Math.random()*100)+1
    let data=req.query.x
    console.log(data)
    res.render('compute',{
        randSolution:`sqrt applied to ${randomNumber} is ${Math.sqrt(randomNumber)}`,
        querySolution:` sqrt applied to ${data} is ${Math.sqrt(data)}`
    })
})

module.exports=router