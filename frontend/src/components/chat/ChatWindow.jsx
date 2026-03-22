import { useState ,useEffect, useContext} from "react"
import Navbar from "./Navbar.jsx"
import ChatInput from "./ChatInput.jsx"
import "./ChatWindow.css"
import {PulseLoader} from "react-spinners"
import { Context } from "../../Context.jsx"
import Chat from "./Chat.jsx"

function ChatWindow() {
  const {loading,setLoading,prompt,setPrompt,reply,SetReply,prevChats,setPrevChats}=useContext(Context);
  
  
  
  
  
  
  


  useEffect(()=>{
    if(prompt && reply){
      setPrevChats(prevChats=>
        [...prevChats,{
          role:"user",
          content:prompt
        },
      {
        role:"assistant",
        content:reply
      }]
      )
    }
    setPrompt("")

  },[reply])
  return (
    <div className='chatwindow'>

        <div className='navbar'>
          <Navbar></Navbar>
        </div>

        <div className='chats'>
          <Chat></Chat>
          
        </div>
        
          <div className="Loader">
              <PulseLoader color='#fff' loading={loading}/>
            </div>
       
        
        
        
        <div className='chatinput'>
          <ChatInput></ChatInput>
        </div>

    </div>
  )
}

export default ChatWindow