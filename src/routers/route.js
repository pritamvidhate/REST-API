const express = require("express");
const { Router } = require("express");

const router = new express.Router();
const Rankingrec = require("../models/schema");

// create data by using post request

router.post("/schema",async (req, res)=>{
    try {
        const addingRecords = new Rankingrec(req.body);
        console.log(req.body);
        const createData = await addingRecords.save();
        res.status(201).send(createData);
    
    } catch (error) {
        res.status(400).send(error);
    }
})

//read data by using get request
router.get("/schema", async (req, res)=>{
    try {
        const readData = await Rankingrec.find({});
        res.status(201).send(readData);
    
    } catch (error) {
        res.status(400).send(error);
    }
})

//update data by using patch request

router.patch("/schema/:id", async(req, res) =>{
    try {
        const _id = req.params.id
        const updatedata = await Rankingrec.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        res.send(updatedata);
    } catch (error) {
        res.status(500).send(error);
    }    
})

// delete data by using delete request

router.delete("/schema/:id", async(req, res) =>{
    try {
        const deleteData = await Rankingrec.findByIdAndDelete(req.params.id);
        res.send(deleteData);
    } catch (error) {
        res.status(500).send(error);
    }    
})

module.exports = router;