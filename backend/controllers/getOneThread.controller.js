import Thread from "../models/thread.model.js";
import { status } from "http-status";


const getOneThread=async(req,res)=>{
    try{
        const {threadId}=req.params
        const thread=await Thread.findOne({threadId:threadId})

        if(!thread){
            return res.status(status.NOT_FOUND).json({error:"Cannot find the thread"})
        }
        return res.status(status.OK).json(thread.messages)

    }
    catch(e){
        console.log(e);
        return res.status(status.INTERNAL_SERVER_ERROR).json({error:"Failed to fetch the thread"})
    }

}
export default getOneThread