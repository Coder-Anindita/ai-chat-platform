import { useContext, useState } from "react";
import "./ChatInput.css"
import { IoSend } from "react-icons/io5";
import { Context } from "../../Context";

function ChatInput() {
    
    const {prompt,setPrompt,reply,setReply,currThreadId,setCurrThreadId,loading,setLoading,setNewChat}=useContext(Context)
    const getReply=async()=>{
        if(!prompt.trim()) return;
        try{
            setLoading(true);
            const response=await fetch("http://localhost:8080/api/v1/chat",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    message:prompt,
                    threadId:currThreadId
                })
            })
            
            
            const result=await response.json()
            setReply(result.reply)
            setNewChat(false);
            setLoading(false);
            

        }
        catch(e){
            console.log(e)
        }


    }
  return (
    <div className='InputContainer'>
        <input type='text' className='textArea' placeholder='Ask anything' value={prompt} onChange={(e)=>setPrompt(e.target.value)} onKeyDown={(e)=>e.key === "Enter" && getReply()}>
            
        </input>
        <div className='sendButton' onClick={getReply}>
            <IoSend />
        </div>
        
    </div>
  )
}

export default ChatInput