import React from "react";
import { useEffect,useState,useContext } from "react";
import "../sidebar/Sidebar.css";
import logo from "../../assets/ConvoGPTlogo.jpg";
import { FaRegEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Context } from "../../Context";
import {v1 as uuidv1} from "uuid";
import { MdDelete } from "react-icons/md";

function Sidebar() {
  const {allThreads,setAllThreads,currThreadId,newChat,setNewChat,setPrompt,setReply,setCurrThreadId,setPrevChats}=useContext(Context);
  
  const getAllThreads=async()=>{
    try{
      const response=await fetch("http://localhost:8080/api/v1/threads",{
        
      });
      const res=await response.json();
      const filterData=res.map(thread=>({threadId:thread.threadId,title:thread.title}));
      
      setAllThreads(filterData)


    }
    catch(e){
      console.log(e);

    }

  }
  useEffect(()=>{
    getAllThreads()
  },[])

  const createANewChat=()=>{
    setNewChat(true);
    setReply(null);
    setPrompt("");
    setCurrThreadId(uuidv1());
    setPrevChats([])

  }

  const changeThreadId=async(newThreadId)=>{
    setCurrThreadId(newThreadId)
    try{
      const response=await fetch(`http://localhost:8080/api/v1/threads/${newThreadId}`,{
        

      })
      const res=await response.json();
      console.log(res);
      setPrevChats(res);
      setNewChat(false);
      setReply(null);

    }
    catch(e){
      console.log(e);

    }



  }
  const deleteThread=async(threadId)=>{
    try{
      const response=await fetch(`http://localhost:8080/api/v1/threads/${threadId}`,{
        methode:"DELETE"
      })
      const result=await response.json();
      console.log(result);
      setAllThreads(prev=>prev.filter(thread=>thread.threadId!==threadId));
      if(threadId===currThreadId){
        createANewChat();
      }


    }
    catch(e){
      console.log(e);
    }



  }



  return (
    <div className="sidebar">

      {/* Top Section */}
      <div className="sidebar-top">
        <img src={logo} className="logo" />
        <RxCross2 className="cross" />

        
      </div>
      <div>
        <button className="newChat" onClick={createANewChat}>
          <FaRegEdit className="edit" /> New Chat
          
        </button>
      </div>

      {/* Chat History */}
      <div className="history">
        {allThreads?.map((thread,idx)=>(
          <div key={idx} onClick={(e)=>changeThreadId(thread.threadId)}
            className={thread.threadId===currThreadId?"highlight":""}
          >
            {thread.title}
            
              <MdDelete className="deleteButton" 
                onClick={(e)=>{
                  e.stopPropagation();
                  deleteThread(thread.threadId)
                }}
              />
            
          
          </div>
        ))}
        

      </div>

      {/* Bottom Section */}
      <div className="sidebar-bottom">
        <p>Sign Out</p>
      </div>

    </div>
  );
}

export default Sidebar;