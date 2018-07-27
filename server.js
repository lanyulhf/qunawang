const path = require("path")
const express = require("express")
const index = require("./src/assets/mocks/index.json")
const choose = require("./src/assets/mocks/choose.json")
const plane = require("./src/assets/mocks/plane.json")

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
app.use("/api/plane",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.json(plane);
})


app.listen(3000,()=>{
    console.log("server is ready on port 3000")
})


