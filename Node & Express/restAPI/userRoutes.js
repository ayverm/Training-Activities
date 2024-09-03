const express = require('express');
const router = express.Router();
const users = []

router.get('/',(req,res)=>{
    res.status(200).send(users)
})

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    const found = users.find(item=>item.id==id);
    if(found)
        res.status(200).send(found);
    else
        res.status(404).send("User not avaiable with id"+id);
})

router.post('/',(req,res)=>{
    const data = req.body;
    console.log(data);
    users.push(data);
    res.status(201).send("Created New User");
})

router.put('/',(req,res)=>{
    res.status(200).send('User updated')
})

router.delete('/',(req,res)=>{
    res.delete(200).send('User Deleted')
})

module.exports = router;  //single export