import React from "react";
import LearnMore from "../../butoons/LearnMore";
import { Link } from "react-router-dom";

function BusinessContainer() {
  return (
    <>
      <div className=" text-4xl pl-6 md:pl-16 font-semibold mb-6">
        <h1>For business</h1>
      </div>
      <div className=" containers w-full flex-col md:flex-col md:gap-5 md:flex  lg:flex-row  lg:justify-center md:mb-20 h-[1850px] md:h-[900px] lg:h-[450px]">
        <div className="md:flex md:justify-center md:gap-5">
          <Link to="/">
            <div className="conatainer lg:w-60 md:w-72  h-500 md:h-full  items-center gap-2 cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-72 bg-neutral-50 rounded-lg shadow-xl flex-row  justify-evenly before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-purple-200 ">
              <div className="conatiner-banner h-[250px] md:h-[135px]">
                <img
                  className="w-full h-full"
                  src="../images/gldn-Surf-CP-SurfaceFamilyForBusiness.avif"
                  alt=""
                />
              </div>
              <div className="container-content h-[100] md:h-[210px] m-5 overflow-hidden">
                <div className="new capitalize pl-2 pr-2 h-6"></div>
                <div className="about-heading mt-2 mb-3 font-bold text-2xl capitalize">
                  Surface for Business
                </div>
                <div className="about-heading md:mb-9 text-wrap overflow-hidden">
                  No matter what you do, there’s a Surface to help you do it.
                </div>
              </div>
              <div className="about-conatiner">
                <div className="about-more ml-4 capitalize p-2 font-bold w-fit cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                  shop now
                </div>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="conatainerl lg:w-60 md:w-72 h-500 md:h-full  items-center gap-2 cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-72 bg-neutral-50 rounded-lg shadow-xl flex-row  justify-evenly before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-purple-200">
              <div className="conatiner-banner h-[250px] md:h-[135px]">
                <img
                  className="w-full h-full"
                  src="../images/gldn-CP-Microsoft-Teams-Commercial.webp"
                  alt=""
                />
              </div>
              <div className="container-content h-[100] md:h-[210px] m-5 overflow-hidden ">
                <div className="new capitalize pl-2 pr-2 h-6"></div>
                <div className="about-heading mt-2 mb-3 font-bold text-2xl capitalize">
                  Get Microsoft Teams for free
                </div>
                <div className="about-heading md:mb-9 text-wrap overflow-hidden">
                  Online meetings, chat and shared cloud storage – all in one
                  place.
                </div>
              </div>
              <div className="about-conatiner">
                <div className="about-more ml-4 capitalize p-2 font-bold w-fit cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                  sign up for free
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="md:flex md:justify-center md:gap-5">
          <Link to="/">
            <div className="conatainer lg:w-60 md:w-72  h-500 md:h-full  items-center gap-2 cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-72 bg-neutral-50 rounded-lg shadow-xl flex-row  justify-evenly before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-purple-200">
              <div className="conatiner-banner h-[250px] md:h-[135px]">
                <img
                  className="w-full h-full"
                  src="../images/gldn-XSX-CP-Xbox-Series-X.webp"
                  alt=""
                />
              </div>
              <div className="container-content h-[100] md:h-[185px] m-5 overflow-hidden">
                <div className="new capitalize pl-2 pr-2 h-6"></div>
                <div className="about-heading mt-2 mb-3 font-bold text-2xl capitalize">
                  Get Microsoft Teams for your business
                </div>
                <div className="about-heading md:mb-9 text-wrap overflow-hidden">
                  Online meetings, chat, real-time collaboration, and shared
                  cloud storage–all in one place.
                </div>
              </div>
              <div className="about-conatiner">
                <div className="about-more ml-4 capitalize p-2 font-bold w-fit cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                  Fint the right plan for your business
                </div>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="conatainer lg:w-60 md:w-72 h-500 md:h-full  items-center gap-2 cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-72 bg-neutral-50 rounded-lg shadow-xl flex-row  justify-evenly before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-purple-200">
              <div className="conatiner-banner h-[250px] md:h-[135px]">
                <img
                  className="w-full h-full"
                  src="../images/Content-Card-Copilot-Commercial.avif"
                  alt=""
                />
              </div>
              <div className="container-content h-[100] md:h-[210px] m-5 overflow-hidden">
                <div className="new capitalize pl-2 pr-2 bg-yellow-400 w-fit">
                  new
                </div>
                <div className="about-heading mt-2 mb-3 font-bold text-2xl capitalize">
                  Copilot for Microsoft 365
                </div>
                <div className="about-heading md:mb-9 text-wrap overflow-hidden">
                  Save time and focus on the things that matter most with AI in
                  Microsoft 365 for business.
                </div>
              </div>
              <div className="about-conatiner">
                <LearnMore />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BusinessContainer;
