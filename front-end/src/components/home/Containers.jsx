import React from "react";
import LearnMore from "../../butoons/LearnMore";
import { Link } from "react-router-dom";

function Containers() {
  return (
    <div className=" containers w-full flex-col md:flex-col md:gap-5 md:flex  lg:flex-row  lg:justify-center  h-[1900px] sm:h-[1800px] md:h-[1230px] lg:h-[600px]">
      <div className="md:flex md:justify-center ">
        <Link to="/">
          <div className="conatainer pb-8 lg:w-60 md:w-72 mr-6  h-520px items-center gap-2 cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-72 bg-neutral-50 rounded-lg shadow-xl flex-row  justify-evenly before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-purple-200">
            <div className="conatiner-banner h-[150px] md:h[240px]">
              <img
                className="w-full h-full"
                src="../images/Content-Card-Surface-Laptop-AI-7Ed-Sapphire-MC001.avif"
                alt=""
              />
            </div>
            <div className="container-content h-200px md:h-[320px] m-5 overflow-hidden">
              <div className="new capitalize pl-2 pr-2 bg-yellow-400 w-fit">
                new
              </div>
              <div className="about-heading mt-2 mb-3 font-bold text-2xl capitalize">
                Maximise the everyday with Microsoft 365
              </div>
              <div className="about-heading mb-9 text-wrap overflow-hidden">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus molestias cum repellendus incidunt dolor sit aliquid
                numquam atque a voluptates?
              </div>
            </div>
            <Link to="/">
              <div className="about-conatiner">
                <LearnMore />
              </div>
            </Link>
          </div>
        </Link>
        <Link to="/">
          <div className="conatainer pb-8 md:w-72 lg:w-60 mr-6  h-520px  items-center gap-2 cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-72 bg-neutral-50 rounded-lg shadow-xl flex-row  justify-evenly before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-purple-200">
            <div className="conatiner-banner h-[150px] md:h[240px]">
              <img
                className="w-full h-full"
                src="../images/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss.avif"
                alt=""
              />
            </div>
            <div className="container-content h-200px md:h-[276px] m-5 overflow-hidden ">
              <div className="new capitalize pl-2 pr-2 h-6"></div>
              <div className="about-heading mt-2 mb-3 font-bold text-2xl capitalize">
                Maximise the everyday with Microsoft 365
              </div>
              <div className="about-heading mb-9 text-wrap overflow-hidden">
                Get online protection, secure cloud storage and innovative apps
                designed to fit your needs – all in one plan.
              </div>
            </div>
            <Link to="/">
            <div className="about-conatiner">
              <LearnMore />
            </div>
            </Link>
            <div className="about-conatiner">
              <div className="about-more m-5 mb-0 rounded-sm text-blue bg-white font-bold w-fit ">
                For up to six people
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="md:flex md:justify-center">
        <Link to="/">
          <div className="conatainer pb-8 md:w-72 lg:w-60 mr-6  h-520px  items-center gap-2 cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-72 bg-neutral-50 rounded-lg shadow-xl flex-row  justify-evenly before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-purple-200">
            <div className="conatiner-banner h-[150px] md:h[240px]">
              <img
                className="w-full h-full"
                src="../images/gldn-XSX-CP-Xbox-Series-X.webp"
                alt=""
              />
            </div>
            <div className="container-content h-200px md:h-[320px] m-5 overflow-hidden ">
              <div className="new capitalize pl-2 pr-2 h-6"></div>
              <div className="about-heading mt-2 mb-3 font-bold text-2xl capitalize">
                Xbox Series X
              </div>
              <div className="about-heading mb-9 text-wrap overflow-hidden">
                The fastest, most powerful Xbox ever.
              </div>
            </div>
            <Link to="/">
            <div className="about-conatiner">
              <LearnMore />
            </div>
            </Link>
          </div>
        </Link>
        <Link to="/">
          <div className="conatainer pb-8  md:w-72 lg:w-60 mr-6 h-520px  items-center gap-2 cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-72 bg-neutral-50 rounded-lg shadow-xl flex-row  justify-evenly before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-purple-200">
            <div className="conatiner-banner h-[150px] md:h[240px]">
              <img
                className="w-full h-full"
                src="../images/Content-Card-Game-Pass-Ultimate.avif"
                alt=""
              />
            </div>
            <div className="container-content h-200px md:h-[320px] m-5 overflow-hidden ">
              <div className="new capitalize pl-2 pr-2 h-6"></div>
              <div className="about-heading mt-2 mb-3 font-bold text-2xl capitalize">
                Xbox Game Pass Ultimate
              </div>
              <div className="about-heading mb-9 text-wrap overflow-hidden">
                Play new games on day one. Plus, enjoy hundreds of high-quality
                games with friends on console and PC.
              </div>
            </div>
            <Link to="/">
              <div className="about-conatiner">
                <LearnMore />
              </div>
            </Link>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Containers;
