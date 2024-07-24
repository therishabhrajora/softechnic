import React from "react";
import BackToTop from "../../butoons/BackToTop";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SocialLinks() {
  return (
    <>
      <div className="links w-full flex content-center items-center gap-3 mt-20 sm:mt-5 md:gap-5 mb-5 pl-6 md:pl-16 text-md md:text-lg">
        <Link to="/">
          <p className="capitalize font-bold">Follow Softoniches</p>
        </Link>
        <Link to="/">
          <div className="group relative">
            <button>
              <FaFacebookF className="w-8 hover:scale-125 duration-200 hover:text-blue-500" />
            </button>
            <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border  border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out  group-hover:scale-100">
              facebook<span></span>
            </span>
          </div>
        </Link>
        <Link to="/">
          <div className="group relative">
            <button>
              <FaYoutube className="w-8 hover:scale-125 duration-200 hover:text-blue-500" />
            </button>
            <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border  border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out  group-hover:scale-100">
            Youtube<span></span>
            </span>
          </div>
        </Link>
        <Link to="/">
          <div className="group relative">
            <button>
              <FaTwitter className="w-8 hover:scale-125 duration-200 hover:text-blue-500" />
            </button>
            <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border  border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out  group-hover:scale-100">
            Twitter<span></span>
            </span>
          </div>
        </Link>
      </div>
      <BackToTop />
    </>
  );
}

export default SocialLinks;
