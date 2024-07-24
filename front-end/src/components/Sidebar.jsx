import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({navElement}) => {

  return (
    <div className="sidebar absolute top-10 right-10 bg-gray-500 animate-scaleUpVerTop rounded-xl z-40">
      <div className="menu-bar text-white flex flex-col">
        {navElement.map((el) => (
          <Link to={`${el}`}>
            <li className="list-none">
              <p
                className="link text-center border-b border-b-red-50 hover:text-slate-800 hover:no-underline px-7 py-4"
                href="#"
              >
                {el}
              </p>
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
