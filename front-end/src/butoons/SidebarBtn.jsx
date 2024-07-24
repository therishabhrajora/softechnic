import React from "react";
import { FaRegCirclePause } from "react-icons/fa6";
import {
  TbMathGreater,
  TbMathLower,
  TbPointFilled,
  TbPoint,
} from "react-icons/tb";
import { Link } from 'react-router-dom';


function SidebarBtn() {
  return (
    <div className="buttons mt-6 hidden md:flex justify-center gap-7 items-center content-center w-full h-18">
      <Link to="/">
        <FaRegCirclePause className=" w-8 text-xl hover:scale-150 duration-200 "/>
      </Link>
      <Link to="/">
        <TbMathGreater className=" w-8 text-xl hover:scale-150 duration-200 "/>
      </Link>
      <Link to="/">
        <TbPoint className=" w-8 text-xl hover:scale-150 duration-200 "/>
      </Link>
      <Link to="/">
        <TbPointFilled className=" w-8 text-xl hover:scale-150 duration-200 "/>
      </Link>
      <Link to="/">
        <TbMathLower className=" w-8 text-xl hover:scale-150 duration-200 "/>
      </Link>
    </div>
  );
}

export default SidebarBtn;
