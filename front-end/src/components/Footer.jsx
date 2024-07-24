import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer flex-row md:flex w-full md:h-[250px] lg:h-[250px] gap-4 text-slate-500 justify-center bg-slate-200 p-4 md:p-8">
        <div className="new w-full md:p-0 flex-col justify-start items-center md:flex-col">
          <Link to="link-to-whats-new" className="block w-full p-2">
            <p className="text-lg capitalize text-slate-700">what's new</p>
          </Link>
          <Link to="link-to-surface-pro" className="block w-full p-2">
            <p className="text-sm capitalize">surface pro</p>
          </Link>
          <Link to="link-to-surface-laptop" className="block w-full p-2">
            <p className="text-sm capitalize">surface laptop</p>
          </Link>
        </div>
        <div className="store w-full md:p-0 flex-col justify-start items-center md:flex-col">
          <Link to="link-to-microsoft-store" className="block w-full p-2">
            <p className="text-lg capitalize text-slate-700">Microsoft store</p>
          </Link>
          <Link to="link-to-account-profile" className="block w-full p-2">
            <p className="text-sm capitalize">account profile</p>
          </Link>
          <Link to="link-to-download-center" className="block w-full p-2">
            <p className="text-sm capitalize">download center</p>
          </Link>
        </div>
        <div className="education w-full md:p-0 flex-col justify-start items-center md:flex-col ">
          <Link to="link-to-education" className="block w-full p-2">
            <p className="text-lg capitalize text-slate-700">education</p>
          </Link>
          <Link
            to="link-to-microsoft-in-education"
            className="block w-full p-2"
          >
            <p className="text-sm capitalize">Microsoft in education</p>
          </Link>

          <Link to="#" className="block w-full p-2">
            <p className="text-sm capitalize">Lorem, ipsum.</p>
          </Link>
        </div>
        <div className="business w-full md:p-0 flex-col justify-start items-center md:flex-col ">
          <Link to="link-to-education" className="block w-full p-2">
            <p className="text-lg capitalize text-slate-700">education</p>
          </Link>
          <Link
            to="link-to-microsoft-in-education"
            className="block w-full p-2"
          >
            <p className="text-sm capitalize">Microsoft in education</p>
          </Link>

          <Link to="#" className="block w-full p-2">
            <p className="text-sm capitalize">Lorem, ipsum.</p>
          </Link>
        </div>
        <div className="developer w-full md:p-0 flex-col justify-start items-center md:flex-col ">
          <Link to="link-to-education" className="block w-full p-2">
            <p className="text-lg capitalize text-slate-700">education</p>
          </Link>
          <Link
            to="link-to-microsoft-in-education"
            className="block w-full p-2"
          >
            <p className="text-sm capitalize">Microsoft in education</p>
          </Link>

          <Link to="#" className="block w-full p-2">
            <p className="text-sm capitalize">Lorem, ipsum.</p>
          </Link>
          <Link to="#" className="block w-full p-2">
            <p className="text-sm capitalize">Lorem, ipsum.</p>
          </Link>
        </div>
        <div className="company w-full md:p-0 flex-col justify-start items-center md:flex-col ">
          <Link to="link-to-education" className="block w-full p-2">
            <p className="text-lg capitalize text-slate-700">education</p>
          </Link>
          <Link
            to="link-to-microsoft-in-education"
            className="block w-full p-2"
          >
            <p className="text-sm capitalize">Microsoft in education</p>
          </Link>

          <Link to="#" className="block w-full p-2">
            <p className="text-sm capitalize">Lorem, ipsum.</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
