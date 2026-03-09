import Thread from "../models/thread.model.js";
import { status } from "http-status";

const deleteAThread=async(req,res)=>{
    const {threadId}=req.params
    try{
        const deleteThread=await Thread.findOneAndDelete({threadId:threadId})
        if(!deleteThread){
            return res.status(status.NOT_FOUND).json({error:"Cannot find the thread"})
        }
        return res.status(status.OK).json(deleteThread)

    }
    catch(e){
        console.log(e)
        return res.status(status.INTERNAL_SERVER_ERROR).json({error:"Failed to delete the thread"})
    }

}
export default deleteAThread