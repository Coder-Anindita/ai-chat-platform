import Thread from "../models/thread.model.js";
import { status } from "http-status";
import getOpenAIAPIResponse from "../utils/openAI.js";

const addAMessageToThread=async(req,res)=>{
    try{
        //validat if threadId and message is provided by the request or not
        const {threadId,message}=req.body
        if(!threadId){
            return res.status(status.BAD_REQUEST).json({error:"threadId is required"})
        }
        if(!message){
            return res.status(status.BAD_REQUEST).json({error:"Message is required"})
        }
        //if threadid is not in db then create a new thread
        let thread=await Thread.findOne({threadId:threadId})
        if(!thread){
            thread=await Thread.create({
                threadId:threadId,
                title:message,
                messages:[{role:"user",content:message}]
            })
            
        }
        //if exist then just push the message
        else{
            thread.messages.push({role:"user",content:message})
        }
        const assistantReply=await getOpenAIAPIResponse(message) 
        thread.messages.push({role:"assistant",content:assistantReply})
        thread.updatedAt=new Date()
        await thread.save()

        return res.status(status.OK).json({reply:assistantReply})


    }
    catch(e){
        console.log(e)
        res.status(status.INTERNAL_SERVER_ERROR).json({error:"Failed to add the message to the thread"})
    }

}
export default addAMessageToThread