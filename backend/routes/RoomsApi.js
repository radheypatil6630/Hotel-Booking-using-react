const express = require('express');
const router = express.Router();

const {RoomModel} = require('../model')


router.post('/create-room', async (req,res)=>{
    try{
        const {roomType,roomImage,price} = req.body;

        const existingRoom = await RoomModel.findOne({roomType});

        if(existingRoom){
            return res.status(400).json({success:false,message:"Room type already exists"});
        }
        else{
            const newRoom = new RoomModel({roomType,roomImage,price});
            await newRoom.save();
            res.status(201).json({success:true,message:"Room type created successfully",room:newRoom});
        }

    }catch(err){
        res.status(500).json({success:false,message:err.message})
    }
})

router.get('/fetch-rooms',async (req,res)=>{
    try{
        const rooms = await RoomModel.find({});
        res.status(200).json({success:true,rooms})
    }catch(err){
        res.status(500).json({success:false,message:err.message})
    }
})

module.exports = router;