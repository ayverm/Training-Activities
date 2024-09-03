const express = require('express');
const userController = require('./userRoutes');
const storage = require('node-persist');
const custController = require('./customerRoute');
const server = express();
const cors = require('cors');
storage.init();
server.use(cors());
//JSON Parser
server.use(express.json())
// server.get('/home',(req,res)=>{
//     res.status(200).send("Home Page");
// })

// server.post('/home',(req,res)=>{
//     res.status(200).send("Home Page Post Method");
// })
server.use(express.json())
server.use('/api/users',userController);
server.use('/api/customers',custController);

server.use((req,res)=>{
    res.send("Page not found")
})
// if any pattern not matching
server.listen(1080,()=>{
    console.log("Server Started");
})