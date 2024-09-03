const express = require('express')
const storage = require('node-persist');
const router = express.Router();
router.get('/',async(req,res)=>{
    const data = await storage.values();
    res.status(200).send(data);
})

router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    const data = await storage.getItem(id);
    if(data)
        res.status(200).send(data);
    else
        res.status(404).send('Data not found');
})

router.post('/',async(req,res)=>{
    const {id,name,rollNo}=req.body;
    await storage.setItem(id,{id,name,rollNo});
    res.status(201).send('UserRegistered Successfully')
})


router.delete('/:id',async(req,res)=>{
    const id = req.params.id;
    const data = await storage.getItem(id);
    if(data){
        await storage.removeItem(id);
        return res.status(200).send("Data deleted");
    }
    res.status(404).send("Data not found");
})


router.put('/:id',async(req,res)=>{
    const id = req.params.id;
    const data = await storage.getItem(id);
    if(data){
        const {name,rollNo} = req.body;
        await storage.updateItem(id,{id,name,rollNo})
        return res.status(200).send("Data Updated Successfully");
    }
    res.status(404).send("Data not found");
})

module.exports=router;

