import Thread from "../models/thread.model.js";
import { status } from "http-status";
const getAllThreads=async(req,res)=>{
    try{
        const allThreads=await Thread.find({}).sort({updatedAt:-1})
        return res.status(status.OK).json(allThreads)



    }
    catch(e){
        return res.status(status.INTERNAL_SERVER_ERROR).json({error:"failed to fetch the threads"})
        console.log(e)

    }

}

export default getAllThreads;