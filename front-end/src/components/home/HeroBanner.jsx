import React from "react";
import { Link } from 'react-router-dom';
import LearnMore from "../../butoons/LearnMore";

function HeroBanner() {
  return (
   
      <div className="hero-banner relative w-full md:w-11/12 mt-0 md:mt-24 mb-24 h-[24rem] sm:h-72 md:h-[566px] md:ml-[5%]">
        <img
          className="h-full w-full"
          src="../images/Highlight-Hero-Windows11-GlobalLaunch_VP4-1260x600.jpg"
          alt=""
        />
        <Link to="/">
          <div className="hero-banner-content absolute top-3 left-3 md:top-32 md:left-20 h-36 w-3/6 md:h-80 md:w-5/12 p-3 text-white">
            <div className="hero-heading text-xl md:text-4xl">
              <h1>Designed for life today – and tomorrow</h1>
            </div>
            <div className="hero-content mb-4 mt:4 md:mb-6 md:mt-6">
              <p>
                The next-generation of games. Your goals. Friends and family.
                Windows 11 was made to bring you closer to everything you love.
              </p>
            </div>
            <div className="hero-link">
              <div className="about-more p-1 md:p-2 rounded-sm font-bold w-fit">
                <LearnMore/>
              </div>
            </div>
          </div>
        </Link>
      </div>
  
  );
}

export default HeroBanner;
