import React from 'react'
import ChatWindow from '../components/chat/ChatWindow.jsx'
import Sidebar from '../components/sidebar/Sidebar.jsx'
import "./ChatPage.css"

function ChatPage() {
  return (
    <div className="chatPage">
        <Sidebar />
        <ChatWindow />
    </div>
  )
}

export default ChatPage