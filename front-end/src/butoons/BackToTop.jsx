import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    {/*<div className="fixed bottom-8 right-8 rounded-full">*/}
      {isVisible && (      
          <ul 
           onClick={scrollToTop}
           className="fixed bottom-8 right-8 mb-4 mt-4 bg-blue-400 rounded-full list-none space-x-1">
            <li className="inline-block  rounded-full text-left">
              <a
                className="relative inline-block cursor-pointer select-none overflow-hidden whitespace-nowrap rounded-full p-2 text-center align-middle text-xs font-medium leading-5 tracking-wide text-slate-800 transition duration-300 ease-linear hover:shadow-lg hover:shadow-slate-600"
                href=""
              >
                <FaArrowUp className="text-xl" />
              </a>
            </li>
          </ul>
      )}
    {/*</div>*/}
   </>
  );
}

export default BackToTop;
