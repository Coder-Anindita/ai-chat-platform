import { useState } from "react";
import "./ChatInput.css"
import { IoSend } from "react-icons/io5";
import {v1 as uuidv1} from "uuid"

function ChatInput({loading,setLoading}) {
    let [prompt,setPrompt]=useState("");
    let [reply,setReply]=useState(null);
    let [currThreadId,setCurrThreadId]=useState(uuidv1())
    const getReply=async()=>{

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
            
            setPrompt("");
            const result=await response.json()
            setReply(result.reply)
            console.log(result)
            setLoading(false);
            

        }
        catch(e){
            console.log(e)
        }


    }
  return (
    <div className='InputContainer'>
        <input type='text' className='textArea' placeholder='Ask anything' value={prompt} onChange={(e)=>setPrompt(e.target.value)}>
            
        </input>
        <div className='sendButton' onClick={getReply} onKeyDown={(e)=>e.key==="Enter"?getReply:""}>
            <IoSend />
        </div>
        
    </div>
  )
}

export default ChatInput