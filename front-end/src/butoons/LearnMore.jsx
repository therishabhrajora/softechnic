import React from "react";
import { Link } from "react-router-dom";

function LearnMore() {
  return (
    <div
      className="about-more ml-4 capitalize p-2 font-bold w-fit cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
    >
      learn more
    </div>
  );
}

export default LearnMore;
