const express =require("express")

const server =  express()
server.get("/",(req,res)=>{
	res.send("hello ")
})
server.post("/",(req,res)=>{
	res.send("hate")
})

server.listen(8080,async()=>{
console.log("connected")
 })
