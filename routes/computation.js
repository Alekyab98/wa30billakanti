var express=require('express')

var router=express.Router();

router.get('/',(req,res)=>{
    let randomNumber=Math.floor(Math.random()*100)+1
    let data=req.query.x
    console.log(data)
    res.render('compute',{
        randSolution:`log applied to ${randomNumber} is ${Math.log(randomNumber)}`,
        querySolution:`log applied to ${data} is ${Math.log(data)}`
    })
})

module.exports=router