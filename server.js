const path = require("path")
const express = require("express")
const index = require("./src/assets/mocks/index.json")
const choose = require("./src/assets/mocks/choose.json")
const plane = require("./src/assets/mocks/plane.json")
const post = require("./src/assets/mocks/post.json")

const app = express();

app.all('/',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");  //允许跨域
  next();     //将控件传给下一个程序
})

app.use("/api/index",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.json(index);
})
app.use("/api/choose",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.json(choose);
})
app.use("/api/post",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.json(post);
})

app.use("/api/plane",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.json(plane);
})
app.use("/api/plane",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  let id = req.query.id;
  let ids = req.query.ids;
  if(ids){
    for(let i=0;i<plane.planeTime.planeInt.length;i++){
      if( id == plane.planeTime.planeInt[i].id){

        res.json(plane.planeTime.planeInt[i].piao[ids])

      }
    }
  }else if(id){
    for(let i=0;i<plane.planeTime.planeInt.length;i++){
      if( id == plane.planeTime.planeInt[i].id){
        res.json(plane.planeTime.planeInt[i])

      }
    }
  } else{
    res.json(plane)
  }





})

app.listen(3000,()=>{
    console.log("server is ready on port 3000")
})


