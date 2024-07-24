import React from 'react'
import { FaWindows,FaXbox ,FaRegFolder} from "react-icons/fa";
import { SiWindowsxp } from "react-icons/si";
import { Link } from 'react-router-dom';

function StoreTabs() {
  return (
    <div
        className="tabs p-12 flex justify-center gap-8 items-center  content-center w-full h-18 text-sm md:text-lg text-center capitalize mt-72 md:mt-0">
        <div className="softoniches">
        <Link to="/">
          <div className="group relative">
            <button  className="text-3xl w-8 hover:scale-125 duration-200 hover:text-blue-500" >
              <FaWindows/>
            </button>
            <p>choose your softoniches 235</p>
          </div>
        </Link>
            
        </div>
        <div className="xbox">
        <Link to="/">
          <div className="group relative">
            <button  className="text-3xl w-8 hover:scale-125 duration-200 hover:text-blue-500" >
              <FaXbox/>
            </button>
            <p>shop xbox</p>
          </div>
        </Link>
           
        </div>
        <div className="get-window">
        <Link to="/">
          <div className="group relative">
            <button  className="text-3xl w-8 hover:scale-125 duration-200 hover:text-blue-500" >
              <SiWindowsxp/>
            </button>
                <p>get window 11</p>
          </div>
        </Link>
           
        </div>
        <div className="explore">
        <Link to="/">
          <div className="group relative">
            <button  className="text-3xl w-8 hover:scale-125 duration-200 hover:text-blue-500" >
              <FaRegFolder/>
            </button>
                <p>explore surface devices</p>
          </div>
        </Link>
          
        </div>
    </div>
  )
}

export default StoreTabs