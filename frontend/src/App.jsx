import ChatPage from "./pages/ChatPage.jsx"
import { Context } from "./Context.jsx"
import { useState } from "react";
import {v1 as uuidv1} from "uuid"
function App() {
  const [prompt,setPrompt]=useState("");
  const [reply,setReply]=useState(null);
  let [currThreadId,setCurrThreadId]=useState(uuidv1())
  let [loading,setLoading]=useState(false);
  let [prevChats,setPrevChats]=useState([]);
  let [newChat,setNewChat]=useState(true);
  let [latestReply,setLatestReply]=useState(null);
  let [allThreads,setAllThreads]=useState([])
  const provideValues={
    prompt,setPrompt,
    reply,setReply,
    currThreadId,setCurrThreadId,
    loading,setLoading,
    prevChats,setPrevChats,
    newChat,setNewChat,
    latestReply,setLatestReply,
    allThreads,setAllThreads,
  };
  

  return (
    <div>
      <Context.Provider value={provideValues}>
        <ChatPage></ChatPage>
      </Context.Provider>
      

    </div>
      
      
      
    
  )
}

export default App
