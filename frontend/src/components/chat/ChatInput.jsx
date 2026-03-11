import { useState } from "react";
import "./ChatInput.css"
import { IoSend } from "react-icons/io5";
function ChatInput() {
    let [prompt,setPrompt]=useState("");
    let[reply,setReply]=useState(null);

    const getReply=async()=>{
        

    }
  return (
    <div className='InputContainer'>
        <input type='text' className='textArea' placeholder='Ask anything' value={prompt} onChange={(e)=>setPrompt(e.target.value)}>
            
        </input>
        <div className='sendButton' onClick={getReply}>
            <IoSend />
        </div>
        
    </div>
  )
}

export default ChatInput