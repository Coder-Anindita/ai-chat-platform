import React from "react";
import "../sidebar/Sidebar.css";
import logo from "../../assets/ConvoGPTlogo.jpg";
import { FaRegEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Sidebar() {
  return (
    <div className="sidebar">

      {/* Top Section */}
      <div className="sidebar-top">
        <img src={logo} className="logo" />
        <RxCross2 className="cross" />

        
      </div>
      <div>
        <button className="newChat">
          <FaRegEdit className="edit" /> New Chat
          
        </button>
      </div>

      {/* Chat History */}
      <div className="history">
        <p>History 1</p>
        <p>History 2</p>
        <p>History 3</p>
      </div>

      {/* Bottom Section */}
      <div className="sidebar-bottom">
        <p>Sign Out</p>
      </div>

    </div>
  );
}

export default Sidebar;