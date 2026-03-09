import express from "express"
import Thread from "../models/thread.model.js"
const router=express.Router()

const testThreadEntry=async(req,res)=>{
    try{
        const thread=await Thread.create({
            threadId:"123",
            title:"Testing new thread"

        })
        
            res.status(200).json({thread})
            res.send(thread)
        
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:e})
    }

}


router.post("/testThread",testThreadEntry)
export default router