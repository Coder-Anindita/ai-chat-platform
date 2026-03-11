import { FaAngleDown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import "./Navbar.css"

function Navbar() {
  return (
    <div className="outer">
        <div className="ConvoLogo">
            ConvoGPT
            <FaAngleDown className="LogoDrop"/>
        </div>
        <div className="UserInfo">
            <FaUser />


        </div>
    </div>
  )
}

export default Navbar;