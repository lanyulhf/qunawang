const path = require("path")
const express = require("express")
const index = require("./src/assets/mocks/index.json")

const app = express();

app.all('/',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");  //允许跨域
  next();     //将控件传给下一个程序
})

app.use("/api/index",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.json(index);
})


app.listen(3000,()=>{
    console.log("server is ready on port 3000")
})


