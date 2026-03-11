import React from 'react'
import Navbar from "./Navbar.jsx"
import ChatInput from "./ChatInput.jsx"
import "./ChatWindow.css"

function ChatWindow() {
  return (
    <div className='chatwindow'>

        <div className='navbar'>
          <Navbar></Navbar>
        </div>

        <div className='chats'>
          chats
        </div>

        <div className='chatinput'>
          <ChatInput></ChatInput>
        </div>

    </div>
  )
}

export default ChatWindow