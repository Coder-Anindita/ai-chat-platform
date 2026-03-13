import { useState } from "react"
import Navbar from "./Navbar.jsx"
import ChatInput from "./ChatInput.jsx"
import "./ChatWindow.css"
import {PulseLoader} from "react-spinners"

function ChatWindow() {
  let [loading,setLoading]=useState(false);
  return (
    <div className='chatwindow'>

        <div className='navbar'>
          <Navbar></Navbar>
        </div>

        <div className='chats'>
          
        </div>
        
          <div className="Loader" loading={loading}>
              <PulseLoader color='#fff' loading={loading}/>
            </div>
       
        
        
        
        <div className='chatinput'>
          <ChatInput loading={loading} setLoading={setLoading}></ChatInput>
        </div>

    </div>
  )
}

export default ChatWindow